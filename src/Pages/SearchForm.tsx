import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlaneTakeoff, Calendar, Users, ArrowRight } from "lucide-react";

interface Airport {
  id: string;
  code: string;
  name: string;
  countryName: string;
}

export const SearchForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    originSkyId: "",
    destinationSkyId: "",
    originEntityId: "",
    destinationEntityId: "",
    date: "2025-01-29",
    returnDate: "2025-03-20",
    adults: "1",
    cabinClass: "economy",
  });

  const [originSearch, setOriginSearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [airports, setAirports] = useState<Airport[]>([]);

  const searchAirports = async (query: string) => {
    if (query.length < 2) {
      setAirports([]);
      return;
    }

    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
      params: {
        query,
        locale: "en-US",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data?.data || [];

      const filtered = data
        .filter((item: any) => item.navigation.entityType === "AIRPORT")
        .map((item: any) => ({
          id: item.entityId,
          code: item.skyId,
          name: item.presentation.title,
          countryName: item.presentation.subtitle,
        }));

      setAirports(filtered);
    } catch (error) {
      console.error("Error fetching airports:", error);
      setAirports([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/results?${queryString}`);
  };

  return (
    <div className="min-h-screen flex items-center bg-slate-900 px-4 py-8">
      <Card className="max-w-4xl w-full mx-auto bg-slate-800/50 border-slate-700 shadow-2xl">
        <CardHeader className="border-b border-slate-700 py-6">
          <CardTitle className="text-2xl md:text-3xl text-center flex items-center text-white justify-center gap-3">
            <PlaneTakeoff className="w-8 h-8 text-slate-300" />
            Find Your Perfect Flight
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-6 px-6 md:px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <Label className="text-slate-300 text-sm">From</Label>
                <Input
                  type="text"
                  placeholder="Type an airport..."
                  value={originSearch}
                  onChange={(e) => {
                    setOriginSearch(e.target.value);
                    searchAirports(e.target.value);
                  }}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-slate-400 h-12"
                />
                {airports.length > 0 && originSearch.length >= 2 && (
                  <ul className="mt-2 bg-slate-800 text-slate-100 rounded-md shadow-xl max-h-64 overflow-auto border border-slate-700">
                    {airports.map((airport) => (
                      <li
                        key={airport.id}
                        className="px-4 py-2 cursor-pointer hover:bg-slate-700 transition-colors"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            originSkyId: airport.code,
                            originEntityId: airport.id,
                          });
                          setOriginSearch(`${airport.name} (${airport.code})`);
                          setAirports([]);
                        }}
                      >
                        <div className="font-medium">
                          {airport.name} ({airport.code})
                        </div>
                        {airport.countryName && (
                          <div className="text-sm text-slate-400">
                            {airport.countryName}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex-1 space-y-2">
                <Label className="text-slate-300 text-sm">To</Label>
                <Input
                  type="text"
                  placeholder="Type an airport..."
                  value={destinationSearch}
                  onChange={(e) => {
                    setDestinationSearch(e.target.value);
                    searchAirports(e.target.value);
                  }}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-slate-400 h-12"
                />
                {airports.length > 0 && destinationSearch.length >= 2 && (
                  <ul className="mt-2 bg-slate-800 text-slate-100 rounded-md shadow-xl max-h-64 overflow-auto border border-slate-700">
                    {airports.map((airport) => (
                      <li
                        key={airport.id}
                        className="px-4 py-2 cursor-pointer hover:bg-slate-700 transition-colors"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            destinationSkyId: airport.code,
                            destinationEntityId: airport.id,
                          });
                          setDestinationSearch(
                            `${airport.name} (${airport.code})`
                          );
                          setAirports([]);
                        }}
                      >
                        <div className="font-medium">
                          {airport.name} ({airport.code})
                        </div>
                        {airport.countryName && (
                          <div className="text-sm text-slate-400">
                            {airport.countryName}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="date"
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Departure
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="bg-slate-900/50 border-slate-600 text-white focus-visible:ring-slate-400 h-12"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="returnDate"
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Return
                </Label>
                <Input
                  id="returnDate"
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) =>
                    setFormData({ ...formData, returnDate: e.target.value })
                  }
                  className="bg-slate-900/50 border-slate-600 text-white focus-visible:ring-slate-400 h-12"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="adults"
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <Users className="w-4 h-4" />
                  Passengers
                </Label>
                <Input
                  id="adults"
                  type="number"
                  min="1"
                  max="9"
                  value={formData.adults}
                  onChange={(e) =>
                    setFormData({ ...formData, adults: e.target.value })
                  }
                  className="bg-slate-900/50 border-slate-600 text-white focus-visible:ring-slate-400 h-12"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="cabinClass" className="text-slate-300 text-sm">
                  Class
                </Label>
                <select
                  id="cabinClass"
                  value={formData.cabinClass}
                  onChange={(e) =>
                    setFormData({ ...formData, cabinClass: e.target.value })
                  }
                  className="w-full h-12 bg-slate-900/50 border border-slate-600 text-white rounded-md focus:ring-2 focus:ring-slate-400 px-3"
                >
                  <option value="economy">Economy</option>
                  <option value="premiumEconomy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg w-full"
            >
              Search Flights
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchForm;