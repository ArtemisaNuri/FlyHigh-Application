import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { searchFlights } from "@/hooks/Hook";
import { PlaneTakeoff, Clock, Calendar } from "lucide-react";

export default function ResultsPage() {
  const location = useLocation();
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const params = Object.fromEntries(new URLSearchParams(location.search));
        const data = await searchFlights(params);
        console.log("Fetched Results:", data);
        setResults(data);
      } catch (err) {
        console.error("Error fetching flight results:", err);
        setError("Failed to load flight results");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [location.search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        <div className="text-center space-y-4 animate-fade-in">
          <PlaneTakeoff className="w-14 h-14 text-indigo-400 animate-bounce mx-auto" />
          <p className="text-lg text-gray-300 font-medium">
            Searching for the best flights...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        <div className="text-center space-y-4">
          <p className="text-xl text-red-400 font-semibold">{error}</p>
          <Button onClick={() => window.location.reload()} variant="secondary">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const itineraries = results?.data?.itineraries || [];
  const destinationImage = results?.data?.destinationImageUrl;

  const totalPages = Math.ceil(itineraries.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentItineraries = itineraries.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 sm:mb-6">
        Flight Results
      </h1>

      {destinationImage && (
        <div className="mb-4 sm:mb-6 w-full max-w-3xl">
          <img
            src={destinationImage}
            alt="Destination"
            className="w-full h-48 sm:h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="w-full max-w-3xl space-y-4 sm:space-y-6">
        {currentItineraries.length > 0 ? (
          <>
            {currentItineraries.map((itinerary: any, index: number) => (
              <FlightCard
                key={startIndex + index}
                itinerary={itinerary}
                legs={itinerary.legs || []}
              />
            ))}

            <div className="flex justify-between items-center mt-4 sm:mt-6 pt-4 border-t border-gray-600">
              <div className="text-xs sm:text-sm text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
              <div className="space-x-2">
                <Button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
                >
                  Previous
                </Button>
                <Button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-400 text-center text-lg">
            No flight itineraries found.
          </div>
        )}
      </div>
    </div>
  );
}

interface FlightCardProps {
  itinerary: any;
  legs: any[];
}

const FlightCard = ({ itinerary, legs }: FlightCardProps) => {
  const getBestPrice = () => {
    try {
      if (itinerary.pricingOptions?.length) {
        const prices = itinerary.pricingOptions
          .map((opt: any) =>
            typeof opt.price?.amount === "number"
              ? opt.price.amount
              : typeof opt.price?.raw === "number"
                ? opt.price.raw
                : parseFloat(
                    String(opt.price?.amount || opt.price?.raw || "").replace(
                      /[^0-9.]/g,
                      ""
                    )
                  )
          )
          .filter((p: any) => !isNaN(p) && p > 0);

        if (prices.length > 0) {
          return Math.min(...prices);
        }
      }

      // Alternative price location check
      if (typeof itinerary.price?.amount === "number") {
        return itinerary.price.amount;
      }

      if (
        typeof itinerary.price?.raw === "number" ||
        typeof itinerary.price?.raw === "string"
      ) {
        const parsed = parseFloat(
          String(itinerary.price.raw).replace(/[^0-9.]/g, "")
        );
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }

      return null;
    } catch (e) {
      console.error("Price parsing error:", e);
      return null;
    }
  };

  const bestPrice = getBestPrice();

  const firstLeg = legs?.[0];

  const formatTime = (dateTime: string) => {
    try {
      const date = new Date(dateTime);
      if (!isNaN(date.getTime())) {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return "N/A";
    } catch (e) {
      return "N/A";
    }
  };

  const extractDate = (leg: any, type: "departure" | "arrival") => {
    // Primary sources based on type
    const primaryDateTime =
      type === "departure" ? leg.departureDateTime : leg.arrivalDateTime;
    const primaryObject = type === "departure" ? leg.departure : leg.arrival;
    const endpointObject = type === "departure" ? leg.origin : leg.destination;

    // Check primary datetime
    if (primaryDateTime) {
      try {
        const date = new Date(primaryDateTime);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        }
      } catch (e) {}
    }

    // Check object with date property
    if (primaryObject?.date) {
      return primaryObject.date;
    }

    // Check endpoint object
    if (endpointObject?.date) {
      return endpointObject.date;
    }

    // Check segments array
    if (leg.segments?.[0]) {
      const segmentDateTime =
        type === "departure"
          ? leg.segments[0].departureDateTime
          : leg.segments[0].arrivalDateTime;

      if (segmentDateTime) {
        try {
          const date = new Date(segmentDateTime);
          if (!isNaN(date.getTime())) {
            return date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
          }
        } catch (e) {}
      }
    }

    // Raw date string in standard formats
    const rawDate = type === "departure" ? leg.departureDate : leg.arrivalDate;
    if (typeof rawDate === "string") {
      // Check if it looks like a date string
      const datePatterns = [
        /^\d{1,2}\/\d{1,2}\/\d{4}$/, // MM/DD/YYYY
        /^\d{4}-\d{1,2}-\d{1,2}$/, // YYYY-MM-DD
        /^\d{1,2}\s[A-Za-z]{3}\s\d{4}$/, // DD MMM YYYY
      ];

      if (datePatterns.some((pattern) => pattern.test(rawDate))) {
        return rawDate;
      }
    }

    return "Date not available";
  };

  const formatDate = (dateTime: string) => {
    try {
      if (!dateTime) return "N/A";

      // Handle ISO date strings
      const date = new Date(dateTime);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }

      return dateTime; // Return as is if it's already formatted
    } catch (e) {
      return "N/A";
    }
  };

  const getDuration = (minutes: number) => {
    if (!minutes || isNaN(minutes)) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getAirlineLogo = (airlineCode: string) => {
    if (!airlineCode) return null;
    return `https://logos.skyscnr.com/images/airlines/favicon/${airlineCode.toLowerCase()}.png`;
  };

  const getAirlineName = (airlineCode: string) => {
    const airlines: { [key: string]: string } = {
      LH: "Lufthansa",
      BA: "British Airways",
      AF: "Air France",
      KL: "KLM",
      FR: "Ryanair",
      U2: "EasyJet",
      W6: "Wizz Air",
      OS: "Austrian Airlines",
      LX: "Swiss",
      TK: "Turkish Airlines",
    };

    return airlines[airlineCode] || airlineCode;
  };

  return (
    <Card className="p-4 sm:p-5 bg-white/10 border border-gray-700 backdrop-blur-md shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
        <div className="space-y-3">
          {firstLeg ? (
            <>
              <div className="flex items-center gap-2">
                {firstLeg.carriers?.marketing?.[0]?.logoUrl && (
                  <img
                    src={
                      firstLeg.carriers.marketing[0].logoUrl ||
                      getAirlineLogo(firstLeg.carriers.marketing[0].name)
                    }
                    alt={firstLeg.carriers.marketing[0].name}
                    className="w-6 h-6 rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = "none";
                    }}
                  />
                )}
                <span className="font-semibold text-lg text-white">
                  {firstLeg.origin.name || firstLeg.origin.displayCode} →{" "}
                  {firstLeg.destination.name ||
                    firstLeg.destination.displayCode}
                </span>
              </div>

              <div className="flex flex-col text-sm text-gray-300 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Depart: {extractDate(firstLeg, "departure")}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Arrive: {extractDate(firstLeg, "arrival")}</span>
                </div>

                <div className="flex items-center gap-2">
                  <PlaneTakeoff className="w-4 h-4 text-gray-400" />
                  <span>
                    {formatTime(firstLeg.departureDateTime) !== "N/A"
                      ? `Depart: ${formatTime(firstLeg.departureDateTime)}`
                      : "Departure time not available"}
                    {formatTime(firstLeg.arrivalDateTime) !== "N/A"
                      ? ` • Arrive: ${formatTime(firstLeg.arrivalDateTime)}`
                      : ""}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>
                    Duration: {getDuration(firstLeg.durationInMinutes)}
                  </span>
                </div>

                {firstLeg.carriers?.marketing?.[0]?.name && (
                  <div className="text-gray-400">
                    Airline:{" "}
                    {getAirlineName(firstLeg.carriers.marketing[0].name)}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-gray-400">No flight information available</div>
          )}
        </div>

        <div className="sm:text-right flex flex-row sm:flex-col justify-between items-center sm:items-end">
          <div className="text-xl sm:text-2xl font-bold text-emerald-400">
            {bestPrice !== null
              ? `${Number(bestPrice).toFixed(2)}`
              : "Price unavailable"}
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md text-sm sm:text-base sm:mt-3">
            Select Flight
          </Button>
        </div>
      </div>
    </Card>
  );
};
