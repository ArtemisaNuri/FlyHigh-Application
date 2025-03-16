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
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Calendar,
  Star,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/Images/planee.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center z-10 max-w-3xl px-4">
          <h1
            className={`text-4xl md:text-5xl font-bold ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            About Our Travel App
          </h1>
          <p
            className={`text-white text-lg mt-3 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"}`}
          >
            Explore the world with ease. Book flights, find hotels, and
            experience unforgettable adventures.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Mission
          </h2>
          <p className="text-white text-lg leading-relaxed">
            At TravelApp, we believe that travel should be accessible,
            enjoyable, and hassle-free for everyone. Our mission is to connect
            travelers with their dream destinations while providing exceptional
            service and unforgettable experiences that create memories to last a
            lifetime.
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
              className="bg-slate-800 shadow-lg border-slate-700 hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="flex items-center gap-3">
                <feature.icon className="w-10 h-10 text-indigo-400 animate-pulse" />
                <CardTitle className="text-lg text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-slate-700 mb-4 flex items-center justify-center overflow-hidden">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Users className="w-16 h-16 text-slate-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-indigo-400">{member.role}</p>
              <p className="text-white mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-slate-800 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-indigo-400 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold mt-2 text-white">
                {stat.value}
              </h3>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">
          Our Journey
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex mb-12 relative ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2"></div>
              <div className="z-10 flex items-center justify-center">
                <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
              </div>
              <div
                className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
              >
                <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-indigo-400">
                    {item.year}
                  </h3>
                  <p className="text-white">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-white">
          What Our Travelers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 p-6 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="italic text-white">"{testimonial.quote}"</p>
              <h4 className="mt-4 font-semibold text-indigo-400">
                {testimonial.name}
              </h4>
              <p className="text-white">{testimonial.location}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-16 px-6 bg-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="text-white">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-slate-700"
              >
                <AccordionTrigger className="text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Partners */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-slate-800 p-4 rounded-lg w-32 h-32 flex items-center justify-center"
            >
              <partner.icon className="w-12 h-12 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 text-center bg-gradient-to-b from-slate-800 to-slate-900">
        <h2 className="text-3xl font-semibold text-white">Ready to Travel?</h2>
        <p className="text-white mt-3">
          Start planning your next adventure with us today.
        </p>
        <Button
          className="mt-6 bg-indigo-500 hover:bg-indigo-400 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Book Your Flight Now
        </Button>
      </div>

      <div className="bg-slate-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                TravelApp
              </h3>
              <p className="text-white mb-4">
                Making travel accessible, enjoyable, and hassle-free for
                everyone since 2020.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Explore</h3>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Hotels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Activities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-400" /> +123 456 7890
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-400" />{" "}
                  support@travelapp.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-400" /> Tirana, AL
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-white">
            <p>
              &copy; {new Date().getFullYear()} TravelApp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Explore Destinations",
    description:
      "Discover hidden gems and popular destinations worldwide with our curated travel guides and insider tips.",
    icon: Globe,
  },
  {
    title: "Smart Planning",
    description:
      "Our AI-powered itinerary planner creates personalized travel schedules based on your preferences and budget.",
    icon: Lightbulb,
  },
  {
    title: "Seamless Booking",
    description:
      "Book flights, hotels, and activities all in one place with our user-friendly platform and secure payment system.",
    icon: CheckCircle2,
  },
  {
    title: "Community & Support",
    description:
      "Join our community of travel enthusiasts, share experiences, and get 24/7 support from our dedicated team.",
    icon: Users,
  },
  {
    title: "Exclusive Deals",
    description:
      "Access members-only discounts and flash deals on flights, accommodations, and attractions around the world.",
    icon: Rocket,
  },
  {
    title: "Sustainable Travel",
    description:
      "Make eco-friendly choices with our carbon footprint calculator and sustainable travel options for conscious explorers.",
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
    quote:
      "This app made my vacation stress-free! I could quickly find and book flights at great prices, and the hotel recommendations were spot on.",
  },
  {
    name: "Sarah Lee",
    location: "London, UK",
    quote:
      "Super easy to book flights and hotels. The customer service is exceptional - they helped me reschedule when my plans changed last minute.",
  },
  {
    name: "Carlos M.",
    location: "Barcelona, Spain",
    quote:
      "The best travel experience I've had! The app suggested local experiences I wouldn't have found otherwise. Will definitely use for all my trips.",
  },
];

// FAQs
const faqs = [
  {
    question: "How do I book a flight?",
    answer:
      "Simply enter your departure and destination cities, select your travel dates, and choose the number of passengers. Browse through our available options, select your preferred flight, and complete the booking by following the payment process. You'll receive a confirmation email with all your flight details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for certain destinations. All payments are processed through secure encrypted connections to ensure your financial information remains protected.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Yes, you can cancel or change your booking through your account dashboard. Please note that cancellation policies and fees vary depending on the airline and fare type. Some tickets are non-refundable or have change fees. We recommend checking the specific terms before booking.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we offer comprehensive travel insurance options that cover trip cancellations, medical emergencies, lost luggage, and more. You can add insurance during the booking process or purchase it separately through your account up to 48 hours before your departure.",
  },
];

// New Team section
const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Former travel blogger with 10+ years in the tourism industry",
    img: "",
  },
  {
    name: "Elena Petrovich",
    role: "Chief Travel Officer",
    bio: "Has visited 75 countries and counting",
    img: "",
  },
  {
    name: "David Kim",
    role: "Head of Technology",
    bio: "Tech expert creating seamless travel experiences",
    img: "",
  },
  {
    name: "Maria Garcia",
    role: "Customer Experience",
    bio: "Ensuring every journey exceeds expectations",
    img: "",
  },
];

const timeline = [
  {
    year: "2020",
    event: "TravelApp founded with a mission to transform travel booking",
  },
  {
    year: "2021",
    event: "Launched mobile app and expanded to 50 countries",
  },
  {
    year: "2022",
    event: "Reached 500,000 users and introduced AI trip planning",
  },
  {
    year: "2023",
    event: "Partnership with major airlines and hotel chains worldwide",
  },
  {
    year: "2024",
    event: "Surpassed 1 million happy travelers milestone",
  },
];

const partners = [
  { name: "Airline Co", icon: Rocket },
  { name: "Hotel Group", icon: Shield },
  { name: "Tour Operator", icon: Globe },
  { name: "Insurance Provider", icon: Shield },
  { name: "Car Rental", icon: Rocket },
  { name: "Travel Tech", icon: Lightbulb },
];
