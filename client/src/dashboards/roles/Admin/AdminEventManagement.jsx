import React, { useEffect, useState } from "react";
import DashboardLayout from "@/dashboards/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar as CalendarIcon,
  Clock,
  Search,
  Plus,
  Edit,
  Trash2,
  Users,
  Calendar,
  MapPin,
  Trophy,
  Book,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import api from "@/api"; // Adjust the import based on your API setup
import { toast } from "sonner";

export default function AdminEventManagement() {
  const [events, setEvents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const response = await api.get("/api/teacher/viewallteachers"); // Replace with your actual API endpoint
      setTeachers(response.data); // Assuming the API returns an array of teachers
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await api.get("/api/events/viewallevents"); // Replace with your actual API endpoint
      // Ensure the data is an array
      setEvents(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]); // Set to an empty array in case of error
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchTeachers();
  }, []);

  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isUpdateEventOpen, setIsUpdateEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    eventDate: new Date(),
    location: "",
    maxParticipants: 0,
    eventType: "",
    classification: "",
    teacherId: "", // Add teacherId
  });

  const [currentEvent, setCurrentEvent] = useState(null);

  const handleAddEvent = async () => {
    try {
      console.log("New Event Data:", newEvent);
      const response = await api.post("api/events/create-event", newEvent);
      if (response.data.success) {
        setEvents([...events, response.data.event]);
        setNewEvent({
          title: "",
          description: "",
          eventDate: new Date(),
          location: "",
          maxParticipants: 0,
          eventType: "",
          classification: "",
          teacherId: "", // Reset teacherId
        });
        setIsAddEventOpen(false);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleUpdateEvent = async () => {
    try {
      const response = await api.put(
        `api/events/update-event/${currentEvent.id}`,
        currentEvent
      );
      if (response.data.success) {
        setEvents(
          events.map((event) =>
            event.id === currentEvent.id ? response.data.event : event
          )
        );
        setIsUpdateEventOpen(false);
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await api.delete(`api/events/delete/${id}`);
      if (response.data.success) {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.eventId !== id)
        );
        //reload the page
        toast.info("Event Deleted Successfully");
        window.location.reload();
        fetchEvents();
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const openUpdateDialog = (event) => {
    setCurrentEvent(event);
    setIsUpdateEventOpen(true);
  };

  // Calculate event statistics
  const totalEvents = events.length;
  const upcomingEvents = events.filter(
    (event) => new Date(event.eventDate) > new Date()
  ).length;
  const totalParticipants = events.reduce(
    (sum, event) => sum + event.maxParticipants,
    0
  );
  const competitiveEvents = events.filter(
    (event) => event.classification === "COMPETITIVE"
  ).length;

  return (
    <DashboardLayout role="admin">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Event Management</h1>
        <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new event.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="eventDate" className="text-right">
                  Event Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !newEvent.eventDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {newEvent.eventDate ? (
                        format(newEvent.eventDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={newEvent.eventDate}
                      onSelect={(date) =>
                        setNewEvent({ ...newEvent, eventDate: date })
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  value={newEvent.location}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, location: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="maxParticipants" className="text-right">
                  Max Participants
                </Label>
                <Input
                  id="maxParticipants"
                  type="number"
                  value={newEvent.maxParticipants}
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      maxParticipants: parseInt(e.target.value),
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="eventType" className="text-right">
                  Event Type
                </Label>
                <Select
                  value={newEvent.eventType}
                  onValueChange={(value) =>
                    setNewEvent({ ...newEvent, eventType: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SPORTS">Sports</SelectItem>
                    <SelectItem value="ARTS">Arts</SelectItem>
                    <SelectItem value="ACADEMIC">Academic</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="teacher" className="text-right">
                  Assign Teacher
                </Label>
                <Select
                  value={newEvent.teacherId}
                  onValueChange={(value) =>
                    setNewEvent({ ...newEvent, teacherId: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((teacher) => (
                      <SelectItem key={teacher.id} value={teacher.id}>
                        {teacher.fname} {teacher.lname} ({teacher.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="classification" className="text-right">
                  Classification
                </Label>
                <Select
                  value={newEvent.classification}
                  onValueChange={(value) =>
                    setNewEvent({ ...newEvent, classification: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select classification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="COMPETITIVE">Competitive</SelectItem>
                    <SelectItem value="NON_COMPETITIVE">
                      Non-Competitive
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={handleAddEvent}>Add Event</Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Event statistics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{totalEvents}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Upcoming Events
            </CardTitle>
            <Clock className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {upcomingEvents}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Participants
            </CardTitle>
            <Users className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {totalParticipants}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Competitive Events
            </CardTitle>
            <Trophy className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {competitiveEvents}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Event Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Max Participants</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Classification</TableHead>
                <TableHead>Teacher Name</TableHead>
                <TableHead>Teacher ID</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>
                    {format(new Date(event.eventDate), "PPP")}
                  </TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.maxParticipants}</TableCell>
                  <TableCell>{event.eventType}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{event.classification}</Badge>
                  </TableCell>
                  <TableCell>
                    {event.incharge?.fname} {event.incharge?.lname}
                  </TableCell>
                  <TableCell>{event.incharge?.empId}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openUpdateDialog(event)}
                      >
                        <Edit className="h-4 w-4 mr-2" /> Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Update Event Dialog */}
      <Dialog open={isUpdateEventOpen} onOpenChange={setIsUpdateEventOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Event</DialogTitle>
            <DialogDescription>
              Update the details of the event.
            </DialogDescription>
          </DialogHeader>
          {currentEvent && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateTitle" className="text-right">
                  Title
                </Label>
                <Input
                  id="updateTitle"
                  value={currentEvent.title}
                  onChange={(e) =>
                    setCurrentEvent({ ...currentEvent, title: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateDescription" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="updateDescription"
                  value={currentEvent.description}
                  onChange={(e) =>
                    setCurrentEvent({
                      ...currentEvent,
                      description: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateEventDate" className="text-right">
                  Event Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !currentEvent.eventDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {currentEvent.eventDate ? (
                        format(new Date(currentEvent.eventDate), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={new Date(currentEvent.eventDate)}
                      onSelect={(date) =>
                        setCurrentEvent({ ...currentEvent, eventDate: date })
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateLocation" className="text-right">
                  Location
                </Label>
                <Input
                  id="updateLocation"
                  value={currentEvent.location}
                  onChange={(e) =>
                    setCurrentEvent({
                      ...currentEvent,
                      location: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateTeacher" className="text-right">
                  Assign Teacher
                </Label>
                <Select
                  value={currentEvent?.teacherId || ""}
                  onValueChange={(value) =>
                    setCurrentEvent({ ...currentEvent, teacherId: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((teacher) => (
                      <SelectItem key={teacher.id} value={teacher.id}>
                        {teacher.fname} {teacher.lname} ({teacher.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateMaxParticipants" className="text-right">
                  Max Participants
                </Label>
                <Input
                  id="updateMaxParticipants"
                  type="number"
                  value={currentEvent.maxParticipants}
                  onChange={(e) =>
                    setCurrentEvent({
                      ...currentEvent,
                      maxParticipants: parseInt(e.target.value),
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateEventType" className="text-right">
                  Event Type
                </Label>
                <Select
                  value={currentEvent.eventType}
                  onValueChange={(value) =>
                    setCurrentEvent({ ...currentEvent, eventType: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SPORTS">Sports</SelectItem>
                    <SelectItem value="ARTS">Arts</SelectItem>
                    <SelectItem value="ACADEMIC">Academic</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="updateClassification" className="text-right">
                  Classification
                </Label>
                <Select
                  value={currentEvent.classification}
                  onValueChange={(value) =>
                    setCurrentEvent({ ...currentEvent, classification: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select classification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="COMPETITIVE">Competitive</SelectItem>
                    <SelectItem value="NON_COMPETITIVE">
                      Non-Competitive
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <Button onClick={handleUpdateEvent}>Update Event</Button>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
