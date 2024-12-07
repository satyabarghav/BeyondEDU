import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  { id: 1, title: "Debate Club Meeting", date: "2024-03-15", time: "15:00", location: "Room 101", image: "debate" },
  { id: 2, title: "Science Fair", date: "2024-03-20", time: "10:00", location: "Main Hall", image: "science" },
  { id: 3, title: "Chess Tournament", date: "2024-03-25", time: "14:00", location: "Library", image: "chess" },
  { id: 4, title: "Art Exhibition", date: "2024-04-01", time: "11:00", location: "Art Gallery", image: "art" },
  { id: 5, title: "Coding Workshop", date: "2024-04-05", time: "16:00", location: "Computer Lab", image: "coding" },
  { id: 6, title: "Sports Day", date: "2024-04-10", time: "09:00", location: "Sports Ground", image: "sports" },
]

export default function Events() {
  const navigate = useNavigate()

  const handleRegister = (eventId) => {
    navigate(`/student/events/register?eventId=${eventId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover and participate in exciting extracurricular activities that will enrich your academic journey.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event,idx) => (
            <Card key={event.id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full">
                <img
                  src={`https://picsum.photos/384/192?random=${idx}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleRegister(event.id)}
                >
                  Register
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

