import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { searchFlights } from "@/hooks/Hook";
import { PlaneTakeoff } from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">Flight Results</h1>

      {destinationImage && (
        <div className="mb-6 w-full max-w-3xl">
          <img
            src={destinationImage}
            alt="Destination"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="w-full max-w-3xl space-y-6">
        {currentItineraries.length > 0 ? (
          <>
            {currentItineraries.map((itinerary: any, index: number) => (
              <FlightCard
                key={startIndex + index}
                itinerary={itinerary}
                legs={itinerary.legs || []}
              />
            ))}

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-600">
              <div className="text-sm text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
              <div className="space-x-2">
                <Button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
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
  const bestPrice = itinerary.pricingOptions?.length
    ? Math.min(...itinerary.pricingOptions.map((opt: any) => opt.price.amount))
    : "N/A";

  const firstLeg = legs?.[0];

  const formatTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="p-5 bg-white/10 border border-gray-700 backdrop-blur-md shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          {firstLeg ? (
            <>
              <div className="font-semibold text-white">
                {firstLeg.origin.name} → {firstLeg.destination.name}
              </div>
              <div className="text-sm text-gray-400">
                Depart: {formatTime(firstLeg.departureDateTime)} • Arrive:{" "}
                {formatTime(firstLeg.arrivalDateTime)}
              </div>
              <div className="text-sm text-gray-400">
                Duration: {Math.floor(firstLeg.durationInMinutes / 60)}h{" "}
                {firstLeg.durationInMinutes % 60}m
              </div>
            </>
          ) : (
            <div className="text-gray-400">No Leg Information Available</div>
          )}
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-400">
            {typeof bestPrice === "number"
              ? `$${bestPrice.toFixed(2)}`
              : bestPrice}
          </div>
          <Button className="mt-3 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md">
            Select Flight
          </Button>
        </div>
      </div>
    </Card>
  );
};
