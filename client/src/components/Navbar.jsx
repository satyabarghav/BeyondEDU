import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Home, Calendar, Info, Phone, LogIn, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logBlack from "@/assets/beyondEDU-black.png";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const NavItems = () => (
    <>
      <NavLink to="/" icon={<Home className="h-6 w-6" />} label="Home" />
      <NavLink to="/events" icon={<Calendar className="h-6 w-6" />} label="Events" />
      <NavLink to="/about" icon={<Info className="h-6 w-6" />} label="About Us" />
      <NavLink to="/contact" icon={<Phone className="h-6 w-6" />} label="Contact" />
      <NavLink to="/login" icon={<LogIn className="h-6 w-6" />} label="Login" />
    </>
  );

  const NavLink = ({ to, icon, label }) => (
    <Link
      to={to}
      className={`flex flex-col items-center transition-colors duration-200 ${
        activeItem === to
          ? 'text-primary font-semibold'
          : 'text-gray-600 hover:text-primary'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-custom-gradient px-4 py-3 shadow-sm sm:px-6 md:px-8 lg:px-10">
      {/* Logo and branding */}
      <Link to="/" className="flex items-center">
        <img src={logBlack} alt="beyondEDU Logo" className="h-14 w-auto ml-2" />
        <span className="sr-only">beyondEDU</span>
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-12 text-lg font-medium lg:flex flex-grow justify-center">
        <NavItems />
      </nav>

      {/* Search and action buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <form className="relative hidden lg:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 w-[200px] rounded-md border border-gray-300 bg-gray-100 pl-10 text-sm focus:border-gray-500 focus:bg-white focus:outline-none"
          />
        </form>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-around bg-white py-3 shadow-t lg:hidden">
        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;