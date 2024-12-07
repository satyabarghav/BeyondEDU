import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar, MapPin, Users } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";
import {jwtDecode} from "jwt-decode";
import api from "@/api";
import DashboardLayout from "@/dashboards/Layout";

const TeacherEventManagement = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [students, setStudents] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isWinnersDialogOpen, setIsWinnersDialogOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const token = sessionStorage.getItem("jwtToken");
      const teacher = jwtDecode(token);
      const response = await api.get(
        `/api/events/assigned?teacherId=${teacher.id}`
      );
      const data = Array.isArray(response.data) ? response.data : [];
      console.log("Fetched Events:", data); // Debugging
      setEvents(
        data.map((event) => ({
          ...event,
          eventType: event.eventType || "unknown", // Handle missing eventType
        }))
      );
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events. Please try again.");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAttendance = async (event) => {
    setSelectedEvent(event);
    try {
      const response = await api.get(
        `/api/participations/events/${event.id}/participations`
      );
      if (Array.isArray(response.data)) {
        setStudents(
          response.data.map((participation) => ({
            id: participation.student.id,
            name: participation.student.name,
            regNum: participation.student.regNum,
            isPresent: participation.status === "ATTENDED",
          }))
        );
        setIsDialogOpen(true);
      } else {
        toast.error("Unexpected response format. Please contact the administrator.");
      }
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Failed to fetch attendance list. Please try again.");
    }
  };

  const handleMarkWinners = async (event) => {
    setSelectedEvent(event);
    try {
      const response = await api.get(
        `/api/participations/events/${event.id}/participations`
      );
      if (Array.isArray(response.data)) {
        setStudents(
          response.data.map((participation) => ({
            id: participation.student.id,
            name: participation.student.name,
            regNum: participation.student.regNum,
            rank: "",
          }))
        );
        setIsWinnersDialogOpen(true);
      } else {
        toast.error("Unexpected response format. Please contact the administrator.");
      }
    } catch (error) {
      console.error("Error fetching participants:", error);
      toast.error("Failed to fetch participants list. Please try again.");
    }
  };

  const handleAttendanceChange = (studentId, isPresent) => {
    setStudents(
      students.map((student) =>
        student.id === studentId ? { ...student, isPresent } : student
      )
    );
  };

  const handleWinnersChange = (studentId, rank) => {
    setStudents(
      students.map((student) =>
        student.id === studentId ? { ...student, rank } : student
      )
    );
  };

  const handleSubmitAttendance = async () => {
    if (!selectedEvent) return;

    try {
      const payload = students.map((student) => ({
        studentId: student.id,
        isPresent: student.isPresent,
      }));

      await api.post(
        `/api/participations/${selectedEvent.id}/attendance`,
        payload
      );
      toast.success("Attendance submitted successfully");
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error submitting attendance:", error);
      toast.error("Failed to submit attendance. Please try again.");
    }
  };

  const handleSubmitWinners = async () => {
    if (!selectedEvent) return;

    const winnersPayload = students
      .filter((student) => student.rank)
      .map((student) => ({
        studentId: student.id,
        rank: student.rank,
      }));

    if (winnersPayload.length === 0) {
      toast.error("Please assign ranks to at least one participant.");
      return;
    }

    try {
      await api.post(
        `/api/achievements/${selectedEvent.id}/record-winners`,
        winnersPayload
      );
      toast.success("Winners recorded successfully!");
      setIsWinnersDialogOpen(false);
    } catch (error) {
      console.error("Error recording winners:", error);
      toast.error("Failed to record winners. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <DashboardLayout role="teacher">
      <div className="container mx-auto px-4 py-8">
        <Toaster richColors />
        <h1 className="text-3xl font-bold mb-6">Faculty Event Management</h1>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            No events assigned to you at the moment.
          </p>
        ) : (
          <div className="overflow-x-auto">
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
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAttendance(event)}
                        >
                          Mark Attendance
                        </Button>
                        {event.classification?.toLowerCase() === "competitive" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleMarkWinners(event)}
                          >
                            Mark Winners
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Attendance Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Mark Attendance: {selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={student.id}
                      checked={student.isPresent}
                      onCheckedChange={(checked) =>
                        handleAttendanceChange(student.id, checked)
                      }
                    />
                    <label htmlFor={student.id} className="text-sm font-medium">
                      {student.name} ({student.regNum})
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button onClick={handleSubmitAttendance}>
                Submit Attendance
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Winners Dialog */}
        <Dialog
          open={isWinnersDialogOpen}
          onOpenChange={setIsWinnersDialogOpen}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Mark Winners: {selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center space-x-2">
                    <Input
                      id={`rank-${student.id}`}
                      placeholder="Rank (e.g., 1st, 2nd)"
                      value={student.rank || ""}
                      onChange={(e) =>
                        handleWinnersChange(student.id, e.target.value)
                      }
                      className="w-full"
                    />
                    <label
                      htmlFor={`rank-${student.id}`}
                      className="text-sm font-medium"
                    >
                      {student.name} ({student.regNum})
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button onClick={handleSubmitWinners}>Submit Winners</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default TeacherEventManagement;
