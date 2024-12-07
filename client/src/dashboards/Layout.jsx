import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Import jwt-decode library
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Bell,
  LogOut,
  Menu,
  X,
  Home,
  Award,
  Users,
  BarChart,
  Calendar,
  UserPlus,
  FileText,
  ClipboardList,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const menuItems = {
  admin: [
    { name: "Dashboard", path: "/admin", icon: Home },
    {
      name: "Achievement Management",
      path: "/admin/achievements",
      icon: Award,
    },
    {
      name: "Participation Tracking",
      path: "/admin/participation",
      icon: ClipboardList,
    },
    { name: "Reports and Analytics", path: "/admin/reports", icon: BarChart },
    {
      name: "User Management",
      icon: Users,
      submenu: [
        {
          name: "Teachers",
          path: "/admin/users/teachers",
          icon: GraduationCap,
        },
        { name: "Students", path: "/admin/users/students", icon: UserPlus },
      ],
    },
    { name: "Event Management", path: "/admin/events", icon: Calendar },
  ],
  student: [
    { name: "Dashboard", path: "/student", icon: Home },
    { name: "Profile Generation", path: "/student/profile", icon: UserPlus },
    { name: "Achievement Submission", path: "/student/submit", icon: Award },
    {
      name: "View Events",
      icon: Calendar,
      submenu: [
        {
          name: "Register for Event",
          path: "/student/events/register",
          icon: FileText,
        },
        {
          name: "My Events",
          path: "/student/events/my-events",
          icon: Calendar,
        },
      ],
    },
  ],
  teacher: [
    { name: "Dashboard", path: "/teacher", icon: Home },
    {
      name: "Achievement Review",
      path: "/teacher/review",
      icon: ClipboardList,
    },
    { name: "Reports and Feedback", path: "/teacher/reports", icon: BarChart },
    { name: "Event Management", path: "/teacher/events", icon: Calendar },
  ],
};

function Sidebar({ role, sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <Link to="/" className="text-2xl font-semibold">
          BeyondEDU
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-white"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems[role].map((item) => (
            <li key={item.name} className="px-6 py-2">
              {item.submenu ? (
                <Collapsible
                  open={openSubmenu === item.name}
                  onOpenChange={() =>
                    setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                  }
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      {item.icon && <item.icon className="mr-3 h-6 w-6" />}
                      {item.name}
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={cn(
                          "flex items-center pl-9 py-2 text-sm rounded-md",
                          location.pathname === subItem.path
                            ? "text-blue-600 bg-white"
                            : "text-gray-600 hover:text-gray-900 hover:bg-white"
                        )}
                      >
                        {subItem.icon && (
                          <subItem.icon className="mr-2 h-4 w-4" />
                        )}
                        {subItem.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-2 py-2 text-base font-medium rounded-md",
                    location.pathname === item.path
                      ? "text-blue-600 bg-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white"
                  )}
                >
                  {item.icon && <item.icon className="mr-3 h-6 w-6" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function DashboardLayout({ role, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: "Unknown User",
    email: "Unknown Email",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    console.log("TOken is",token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded.email)
        setUserDetails({
          fullName: `${decoded.firstName} ${decoded.lastName}`,
          email: decoded.email,
        });
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        role={role}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>
                      {userDetails.fullName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userDetails.fullName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userDetails.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
