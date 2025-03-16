import React from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Map,
  Headset,
  ArrowRight,
  Globe,
  Star,
  Users,
  Rocket,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      content:
        "The best travel planning experience I've ever had. Seamless and intuitive!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Business Traveler",
      content:
        "Makes business travel a breeze. The 24/7 support is exceptional.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Adventure Seeker",
      content:
        "Found amazing hidden gems I wouldn't have discovered otherwise.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10K+", label: "Flights Booked", icon: Rocket },
    { value: "500+", label: "Destinations", icon: Globe },
    { value: "1M+", label: "Happy Travelers", icon: Users },
    { value: "24/7", label: "Customer Support", icon: Phone },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black/60">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
              Your Journey Begins Here
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
              Discover a world of seamless experiences with our innovative
              platform. Explore, engage, and enjoy the journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 sm:px-6 md:px-8 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg"
                onClick={() => navigate("/explore-more")}
              >
                Start Exploring
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-slate-700 px-4 py-2 sm:px-6 md:px-8 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 text-center px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-indigo-400 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-2">
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-slate-900 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 max-w-7xl mx-auto">
          <Card className="h-auto sm:h-[380px] md:h-[420px] w-full backdrop-blur-lg bg-white/5 border-2 border-gray-200/10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-105 group">
            <CardHeader>
              <div className="rounded-full bg-slate-700/50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4">
                <Plane className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 animate-pulse group-hover:rotate-12 transition-transform" />
              </div>
              <CardTitle className="text-white text-xl sm:text-2xl">
                Flight Deals
              </CardTitle>
              <CardDescription className="text-white/90 text-sm sm:text-base">
                <p>
                  Discover a world of seamless travel with our intuitive flight
                  booking app. Whether you're planning a business trip or your
                  next vacation, our app offers real-time flight updates,
                  competitive pricing, and personalized recommendations.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter className="pb-4 pl-4 sm:absolute sm:bottom-6 sm:left-6">
              <div className="flex items-center text-blue-400 hover:text-white cursor-pointer group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardFooter>
          </Card>

          <Card className="h-auto sm:h-[380px] md:h-[420px] w-full backdrop-blur-lg bg-white/5 border-2 border-gray-200/10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-105 group">
            <CardHeader>
              <div className="rounded-full bg-slate-700/50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4">
                <Map className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 animate-pulse group-hover:rotate-12 transition-transform" />
              </div>
              <CardTitle className="text-white text-xl sm:text-2xl">
                Personalized Trips
              </CardTitle>
              <CardDescription className="text-white/90 text-sm sm:text-base">
                <p>
                  Embark on journeys crafted just for you with our personalized
                  trips app. Designed to cater to your unique interests and
                  travel style, our platform curates bespoke itineraries and
                  exclusive experiences.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter className="pb-4 pl-4 sm:absolute sm:bottom-6 sm:left-6">
              <div className="flex items-center text-blue-400 hover:text-white cursor-pointer group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardFooter>
          </Card>

          <Card className="h-auto sm:h-[380px] md:h-[420px] w-full backdrop-blur-lg bg-white/5 border-2 border-gray-200/10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-105 group">
            <CardHeader>
              <div className="rounded-full bg-slate-700/50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4">
                <Headset className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 animate-pulse group-hover:rotate-12 transition-transform" />
              </div>
              <CardTitle className="text-white text-xl sm:text-2xl">
                24/7 Support
              </CardTitle>
              <CardDescription className="text-white/90 text-sm sm:text-base">
                <p>
                  Experience peace of mind with our 24/7 support, always ready
                  to assist you. Whether you have questions about your booking
                  or need help navigating our app, our dedicated team is just a
                  call or click away.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter className="pb-4 pl-4 sm:absolute sm:bottom-6 sm:left-6">
              <div className="flex items-center text-blue-400 hover:text-white cursor-pointer group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="bg-slate-800 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 p-4 sm:p-5 md:p-6 rounded-xl"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">
                  {testimonial.content}
                </p>
                <div className="text-slate-300 font-medium text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-white/60 text-xs sm:text-sm">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-800 via-slate-600 to-blue-300 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Join millions of happy travelers who have discovered their perfect
            adventures with us.
          </p>
          <Button
            className="bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 sm:px-6 md:px-8 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg"
            onClick={() => navigate("/search")}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
