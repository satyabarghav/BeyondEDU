import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Upload, Edit, Trash2, Loader } from 'lucide-react';
import DashboardLayout from "@/dashboards/Layout.jsx";
import api from "@/api.js";
import { toast, Toaster } from "sonner";

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    yearsOfExperience: 0,
    empId: "",
  });
  const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [csvFile, setCsvFile] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/api/teacher/viewallteachers");
      const fetchedTeachers = Array.isArray(response.data) ? response.data : [];
      setTeachers(fetchedTeachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      toast.error("Failed to fetch teachers. Please try again.");
      setTeachers([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prev) => ({
      ...prev,
      [name]: name === "yearsOfExperience" ? parseInt(value) : value,
    }));
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/api/teacher/register", newTeacher);
      setTeachers((prev) => [...prev, response.data]);
      setNewTeacher({
        fname: "",
        lname: "",
        email: "",
        username: "",
        password: "",
        yearsOfExperience: 0,
        empId: "",
      });
      setIsAddTeacherOpen(false);
      toast.success("Teacher added successfully");
    } catch (error) {
      console.error("Error adding teacher:", error);
      toast.error("Failed to add teacher. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTeacher = async (id) => {
    setIsLoading(true);
    try {
      await api.delete(`/api/teacher/delete/${id}`);
      setTeachers((prev) => prev.filter((teacher) => teacher.id !== id));
      toast.info("Teacher deleted successfully");
    } catch (error) {
      console.error("Error deleting teacher:", error);
      toast.error("Failed to delete teacher. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCsvFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleImportFromCsv = async () => {
    if (!csvFile) {
      toast.error("Please select a CSV file first.");
      return;
    }
    const formData = new FormData();
    formData.append("file", csvFile);

    setIsLoading(true);
    try {
      const response = await api.post("/api/teacher/batch-register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTeachers((prev) => [...prev, ...response.data.successes]);
      toast.success("Teachers imported successfully!");
    } catch (error) {
      console.error("Error importing teachers:", error);
      toast.error("Failed to import teachers. Please try again.");
    } finally {
      setIsLoading(false);
      setCsvFile(null);
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <Toaster richColors />
        <Card>
          <CardHeader>
            <CardTitle>Teacher Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Total Teachers: {teachers.length}</p>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Teacher List</h2>
          <div className="flex space-x-4">
            <Dialog open={isAddTeacherOpen} onOpenChange={setIsAddTeacherOpen}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Teacher
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Teacher</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new teacher below.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddTeacher}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="fname" className="text-right">
                        First Name
                      </Label>
                      <Input
                        id="fname"
                        name="fname"
                        value={newTeacher.fname}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="lname" className="text-right">
                        Last Name
                      </Label>
                      <Input
                        id="lname"
                        name="lname"
                        value={newTeacher.lname}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={newTeacher.email}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        name="username"
                        value={newTeacher.username}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password" className="text-right">
                        Password
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={newTeacher.password}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="yearsOfExperience" className="text-right">
                        Years of Experience
                      </Label>
                      <Input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        value={newTeacher.yearsOfExperience}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="empId" className="text-right">
                        Employee ID
                      </Label>
                      <Input
                        id="empId"
                        name="empId"
                        value={newTeacher.empId}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Add Teacher
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <div className="flex items-center space-x-4">
              <Input
                type="file"
                accept=".csv"
                onChange={handleCsvFileChange}
                className="hidden"
                id="uploadCsv"
              />
              <Label
                htmlFor="uploadCsv"
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <Upload className="mr-2 h-4 w-4" />
                Import from CSV
              </Label>
              {csvFile && (
                <span className="text-sm text-muted-foreground">
                  {csvFile.name}
                </span>
              )}
              <Button
                onClick={handleImportFromCsv}
                disabled={isLoading || !csvFile}
              >
                {isLoading ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-2 h-4 w-4" />
                )}
                Process CSV
              </Button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <Loader className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Years of Experience</TableHead>
                <TableHead>Employee ID</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow key={teacher.id || teacher.empId}>
                  <TableCell>{teacher.fname}</TableCell>
                  <TableCell>{teacher.lname}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.username}</TableCell>
                  <TableCell>{teacher.yearsOfExperience}</TableCell>
                  <TableCell>{teacher.empId}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        disabled={isLoading}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </DashboardLayout>
  );
}

