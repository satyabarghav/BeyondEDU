import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar, MapPin, Users, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast, Toaster } from "sonner";
import api from "@/api";
import DashboardLayout from "@/dashboards/Layout";
import { jwtDecode } from "jwt-decode";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = jwtDecode(sessionStorage.getItem("jwtToken")).id;
  useEffect(() => {
    fetchMyEvents();
  }, []);

  const fetchMyEvents = async () => {
    try {
      const response = await api.get(`/api/events/my-events/${id}`);
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console .error("Error fetching my events:", error);
      toast.error("Failed to fetch your events. Please try again.");
      setLoading(false);
    }
  };

  const handleCancelRegistration = async (eventId) => {
    
    try {
      await api.delete(`/api/participations/${eventId}/cancel-registration?studentId=${id}`);
      toast.success("Successfully cancelled event registration.");
      fetchMyEvents(); // Refresh the events list
    } catch (error) {
      console.error("Error cancelling event registration:", error);
      toast.error("Failed to cancel event registration. Please try again.");
    }
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <DashboardLayout role="student">
      <div className="container mx-auto px-4 py-8">
        <Toaster richColors />
        <h1 className="text-3xl font-bold mb-6">My Events</h1>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven't registered for any events yet.
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Classification</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-500">
                        {event.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {format(new Date(event.eventDate), "PPP")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{event.eventType}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{event.classification}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleCancelRegistration(event.id)}
                    >
                      Cancel Registration
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyEvents;
