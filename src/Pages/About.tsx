"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Rocket,
  Globe,
  Users,
  CheckCircle2,
  Lightbulb,
  Heart,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/Images/planee.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold animate-fade-in">
            About Our Travel App
          </h1>
          <p className="text-gray-300 text-lg mt-3 animate-fade-in delay-200">
            Explore the world with ease. Book flights, find hotels, and
            experience unforgettable adventures.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 animate-slide-in">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800 shadow-lg border-slate-900 hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="flex items-center gap-3">
                <feature.icon className="w-10 h-10 text-indigo-400 animate-pulse" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-16 bg-slate-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-indigo-400">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-900 p-6 shadow-lg"
            >
              <p className="italic text-gray-300">"{testimonial.quote}"</p>
              <h4 className="mt-4 font-semibold text-indigo-400">
                {testimonial.name}
              </h4>
              <p className="text-gray-400">{testimonial.location}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">FAQs</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Ready to Travel?</h2>
        <p className="text-gray-400 mt-3">
          Start planning your next adventure with us today.
        </p>
        {/* <Button className="mt-6 bg-indigo-500 hover:bg-indigo-400 transition-all duration-300" onClick={()=> navigate("/explore-more")}>
          Explore Trips
        </Button> */}
      </div>

      <div className="bg-slate-800 py-8 text-center text-gray-300">
        <div className="flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-indigo-400" /> +123 456 7890
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-indigo-400" /> support@travelapp.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-400" /> Tirana, Al
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Explore Destinations",
    description: "Find hidden gems worldwide.",
    icon: Globe,
  },
  {
    title: "Smart Planning",
    description: "AI-powered itineraries.",
    icon: Lightbulb,
  },
  {
    title: "Seamless Booking",
    description: "Flights, hotels, and activities.",
    icon: CheckCircle2,
  },
  {
    title: "Community & Support",
    description: "Join a travel-loving community.",
    icon: Users,
  },
  {
    title: "Exclusive Deals",
    description: "Get members-only discounts.",
    icon: Rocket,
  },
  {
    title: "Sustainable Travel",
    description: "Eco-friendly options.",
    icon: Heart,
  },
];



const stats = [
  { value: "10K+", label: "Flights Booked", icon: Rocket },
  { value: "500+", label: "Destinations", icon: Globe },
  { value: "1M+", label: "Happy Travelers", icon: Users },
  { value: "24/7", label: "Customer Support", icon: Phone },
];

const testimonials = [
  {
    name: "John Doe",
    location: "New York, USA",
    quote: "This app made my vacation stress-free!",
  },
  {
    name: "Sarah Lee",
    location: "London, UK",
    quote: "Super easy to book flights and hotels.",
  },
  {
    name: "Carlos M.",
    location: "Barcelona, Spain",
    quote: "The best travel experience I've had!",
  },
];

// FAQs
const faqs = [
  {
    question: "How do I book a flight?",
    answer: "Simply search for flights and click 'Book Now'.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, and more.",
  },
];
