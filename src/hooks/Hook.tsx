import { FlightSearchResponse } from "@/Interface/Interface";
import axios from "axios";

const API_HOST = "sky-scrapper.p.rapidapi.com";
const BASE_URL =
  "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsComplete";

export const searchFlights = async (params: Record<string, string>) => {
  const options = {
    method: "GET",
    url: BASE_URL,
    params,
    headers: {
      "x-rapidapi-key": process.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };
  console.log(import.meta.env.VITE_RAPIDAPI_KEY); 

  try {
    const response = await axios.request<FlightSearchResponse>(options);
        console.log("Search Flight Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  } 
};
