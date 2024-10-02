import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  { id: 1, title: "Debate Club Meeting", date: "2024-03-15", time: "15:00", location: "Room 101" },
  { id: 2, title: "Science Fair", date: "2024-03-20", time: "10:00", location: "Main Hall" },
  { id: 3, title: "Chess Tournament", date: "2024-03-25", time: "14:00", location: "Library" },
  { id: 4, title: "Art Exhibition", date: "2024-04-01", time: "11:00", location: "Art Gallery" },
  { id: 5, title: "Coding Workshop", date: "2024-04-05", time: "16:00", location: "Computer Lab" },
  { id: 6, title: "Sports Day", date: "2024-04-10", time: "09:00", location: "Sports Ground" },
]

export default function Events() {
  return (
    <div>
      <Navbar />
      <div className="space-y-8 pt-16"> {/* Added pt-16 for spacing */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">Discover and participate in exciting extracurricular activities.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
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
