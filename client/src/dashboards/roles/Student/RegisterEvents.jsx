import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import api from '@/api';
import { toast, Toaster } from 'sonner';
import DashboardLayout from '@/dashboards/Layout';
import {jwtDecode} from 'jwt-decode';

const RegisterEvents = () => {
  const [events, setEvents] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventsWithStatus();
  }, []);

  const fetchEventsWithStatus = async () => {
    try {
      const studentDetails = jwtDecode(sessionStorage.getItem("jwtToken")); // Decode the JWT token
      const response = await api.get(`/api/events/with-status?studentId=${studentDetails.id}`);
      setEvents(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events. Please try again.");
      setEvents([]); // Set to an empty array in case of error
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterOrCancel = async (eventId, isRegistered) => {
    try {
      const studentDetails = jwtDecode(sessionStorage.getItem("jwtToken")); // Decode the JWT token

      if (isRegistered) {
        // Cancel registration
        await api.delete(`/api/participations/${eventId}/cancel-registration`, {
          params: { studentId: studentDetails.id },
        });
        toast.success("Successfully cancelled registration!");
      } else {
        // Register
        const registrationData = {
          regNum: studentDetails.regNum,
          eventId,
          participationDate: new Date().toISOString().split("T")[0],
          status: "REGISTERED",
        };
        await api.post(`/api/participations/register`, registrationData);
        toast.success("Successfully registered for the event!");
      }

      // Refresh the events list
      fetchEventsWithStatus();
    } catch (error) {
      console.error("Error updating registration:", error);
      toast.error("Failed to update registration status. Please try again.");
    }
  };

  const getImageUrl = (event) => {
    return event.imageUrl || `https://placehold.co/800x600`;
  };

  if (loading) {
    return <div className="text-center">Loading events...</div>;
  }

  return (
    <DashboardLayout role="student">
      <div className="container mx-auto px-4 py-8">
        <Toaster richColors />
        <h1 className="text-3xl font-bold mb-6">Register for Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <Card key={event.eventId} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img
                    src={getImageUrl(event)}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{format(new Date(event.eventDate), "PPP")}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Max Participants: {event.maxParticipants}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="secondary">{event.eventType}</Badge>
                      <Badge variant="outline">{event.classification}</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => handleRegisterOrCancel(event.eventId, event.status === "REGISTERED")}
                    variant={event.status === "REGISTERED" ? "destructive" : "primary"}
                  >
                    {event.status === "REGISTERED" ? "Cancel Registration" : "Register"}
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center">No events available</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RegisterEvents;
