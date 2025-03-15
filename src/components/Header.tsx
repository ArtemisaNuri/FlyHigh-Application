import  { useState } from "react";
import { NavLink } from "react-router-dom";
import { Globe2, Info, Plane, PlaneTakeoff, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      to: "/search",
      icon: <PlaneTakeoff className="w-4 h-4" />,
      label: "Flights",
    },
    { to: "/explore-more", icon: <Globe2 className="w-4 h-4" />, label: "Explore" },
    { to: "/about", icon: <Info className="w-4 h-4" />, label: "About" },
  ];

  return (
    <header className="w-full p-4 fixed top-0 bg-slate-900/95 backdrop-blur-sm text-white shadow-lg z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2  animate-pulse font-bold text-lg hover:text-white transition-colors"
        >
          <Plane
            className="w-6 h-6  text-indigo-400 animate-pulse "
            aria-label="Smart Flights Logo"
          />
          <span>Smart Flights</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "text-white bg-slate-700"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
          <Button
            className="ml-4 bg-slate-700 hover:bg-slate-600 text-white"
            size="sm"
          >
            Sign In
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-3 rounded-md transition-all ${
                    isActive
                      ? "text-white bg-slate-700"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <Button
              className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white"
              size="sm"
            >
              Sign In
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
