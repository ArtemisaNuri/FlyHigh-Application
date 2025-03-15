"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, MapPin } from "lucide-react";

const TRIPS = [
  {
    title: "Maldive Escape",
    image: "src/assets/Images/nova.webp",
    description: "Relax in crystal-clear waters and overwater bungalows.",
    time: "7 Days",
    type: "Beach",
  },
  {
    title: "Bali Adventure",
    image: "src/assets/Images/bali.jpg",
    description: "Explore temples, waterfalls, and lush jungles in Bali.",
    time: "10 Days",
    type: "Nature",
  },
  {
    title: "Germany Tour",
    image: "src/assets/Images/berlin.avif",
    description: "Discover Berlin, Munich, and the breathtaking Black Forest.",
    time: "8 Days",
    type: "City",
  },
  {
    title: "New York Getaway",
    image: "src/assets/Images/ny.jpg",
    description: "Experience the city that never sleeps with iconic sights.",
    time: "5 Days",
    type: "City",
  },
  {
    title: "Paris Romance",
    image: "src/assets/Images/france.jpg",
    description: "Indulge in the charm of Paris, the city of love.",
    time: "6 Days",
    type: "City",
  },
  {
    title: "Tokyo Adventure",
    image: "src/assets/Images/tokyo.jpg",
    description: "Explore the neon lights, temples, and futuristic cityscapes.",
    time: "9 Days",
    type: "City",
  },
  {
    title: "Dubai Luxury",
    image: "src/assets/Images/dubaii.jpg",
    description: "Experience luxury shopping, desert safaris, and skyscrapers.",
    time: "7 Days",
    type: "City",
  },
  {
    title: "Santorini Escape",
    image: "src/assets/Images/Santorini.webp",
    description: "Enjoy stunning sunsets and whitewashed buildings by the sea.",
    time: "6 Days",
    type: "Beach",
  },
  {
    title: "Rome Exploration",
    image: "src/assets/Images/roma.webp",
    description: "Walk through history with ancient ruins and rich culture.",
    time: "7 Days",
    type: "City",
  },
  {
    title: "Sydney Adventure",
    image: "src/assets/Images/sydney.jpg",
    description: "Explore the Opera House, beaches, and vibrant city life.",
    time: "10 Days",
    type: "Beach",
  },
  {
    title: "Barcelona Escape",
    image: "src/assets/Images/barcelona.jpg",
    description: "Experience the beautiful streets of Barcelona.",
    time: "6 Days",
    type: "City",
  },
  {
    title: "Hawaii Paradise",
    image: "src/assets/Images/hawaii.jpg",
    description: "Relax on the sandy beaches of Hawaii.",
    time: "7 Days",
    type: "Beach",
  },
];

const ITEMS_PER_PAGE = 9;

export default function TripsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDuration, setFilterDuration] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTrips = TRIPS.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterDuration === "" || trip.time === filterDuration) &&
      (filterType === "" || trip.type === filterType)
  );

  const totalPages = Math.ceil(filteredTrips.length / ITEMS_PER_PAGE);
  const paginatedTrips = filteredTrips.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-slate-900 min-h-screen py-12 my-10 px-6 sm:px-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Let's Make a Trip
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
        <Input
          type="text"
          placeholder="Search destination..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-slate-800 text-white border-slate-700 focus:ring-slate-500 w-full sm:w-64"
        />

        <Select onValueChange={setFilterDuration} value={filterDuration}>
          <SelectTrigger className="bg-slate-800 text-white border-slate-700 focus:ring-slate-500 w-full sm:w-48">
            <SelectValue placeholder="Filter by duration" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700 text-white">
            {/* <SelectItem value="">All Durations</SelectItem>
            <SelectItem value="5 Days">5 Days</SelectItem>
            <SelectItem value="6 Days">6 Days</SelectItem>
            <SelectItem value="7 Days">7 Days</SelectItem>
            <SelectItem value="8 Days">8 Days</SelectItem>
            <SelectItem value="9 Days">9 Days</SelectItem>
            <SelectItem value="10 Days">10 Days</SelectItem> */}
          </SelectContent>
        </Select>

        {/* Filter by Type */}
        <Select onValueChange={setFilterType} value={filterType}>
          <SelectTrigger className="bg-slate-800 text-white border-slate-700 focus:ring-slate-500 w-full sm:w-48">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700 text-white">
            {/* <SelectItem value="">All Types</SelectItem>
            <SelectItem value="Beach">Beaches</SelectItem>
            <SelectItem value="City">Cities</SelectItem>
            <SelectItem value="Nature">Nature</SelectItem> */}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedTrips.length > 0 ? (
          paginatedTrips.map((trip, index) => (
            <Card
              key={index}
              className="bg-slate-800 shadow-lg rounded-lg border-slate-900 shadow-slate-900 overflow-hidden hover:scale-105 group"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-56 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {trip.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>{trip.description}</p>
                <div className="flex items-center gap-2 mt-4">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-200">{trip.time}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-200">{trip.type}</span>
                </div>
                <Button className="mt-6 w-full bg-slate-700 hover:bg-slate-600">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No trips found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-4">
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <span className="text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
