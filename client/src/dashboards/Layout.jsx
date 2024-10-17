import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, LogOut, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardLayout({ children, role }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = {
    admin: [
      { name: 'Dashboard', href: '/admin' },
      { name: 'Achievement Management', href: 'dashboard/admin/achievements' },
      { name: 'Participation Tracking', href: '/admin/participation' },
      { name: 'Reports and Analytics', href: '/admin/reports' },
      { name: 'User Management', href: '/admin/users' },
    ],
    student: [
      { name: 'Dashboard', href: '/student' },
      { name: 'Achievement Dashboard', href: '/student/achievements' },
      { name: 'Profile Generation', href: '/student/profile' },
      { name: 'Achievement Submission', href: '/student/submit' },
    ],
    teacher: [
      { name: 'Dashboard', href: '/teacher' },
      { name: 'Achievement Review', href: '/teacher/review' },
      { name: 'Reports and Feedback', href: '/teacher/reports' },
    ],
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg lg:relative lg:block lg:translate-x-0`}>
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <Link to="/" className="text-2xl font-semibold">
            BeyondEDU
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-6">
          <ul>
            {menuItems[role].map((item) => (
              <li key={item.name} className="px-6 py-2">
                <Link to={item.href} className="text-gray-600 hover:text-gray-900 hover:bg-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <Avatar className="ml-4">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}