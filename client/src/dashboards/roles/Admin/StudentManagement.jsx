import React, { useState, useEffect } from "react";
import { UserPlus, Upload, Edit, Trash2, Loader } from "lucide-react";
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
import { toast, Toaster } from "sonner";
import api from "@/api";
import DashboardLayout from "@/dashboards/Layout";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    regNum: "",
  });
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [csvFile, setCsvFile] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/api/student/viewallstudents");
      const fetchedStudents = Array.isArray(response.data) ? response.data : [];
      setStudents(fetchedStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Failed to fetch students. Please try again.");
      setStudents([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/api/student/register", newStudent);
      setStudents((prev) => [...prev, response.data]);
      setNewStudent({
        fname: "",
        lname: "",
        email: "",
        username: "",
        regNum: "",
      });
      setIsAddStudentOpen(false);
      toast.success("Student added successfully");
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("Failed to add student. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteStudent = async (id) => {
    setIsLoading(true);
    try {
      await api.delete(`/api/student/delete/${id}`);
      setStudents((prev) => prev.filter((student) => student.id !== id));
      toast.info("Student deleted successfully");
    } catch (error) {
      console.error("Error deleting student:", error);
      toast.error("Failed to delete student. Please try again.");
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
      const response = await api.post("/api/student/batch-register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStudents((prev) => [...prev, ...response.data.successes]);
      toast.success("Students imported successfully!");
    } catch (error) {
      console.error("Error importing students:", error);
      toast.error("Failed to import students. Please try again.");
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
            <CardTitle>Student Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Total Students: {students.length}</p>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Student List</h2>
          <div className="flex space-x-4">
            <Dialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Student</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new student below.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddStudent}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="fname" className="text-right">
                        First Name
                      </Label>
                      <Input
                        id="fname"
                        name="fname"
                        value={newStudent.fname}
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
                        value={newStudent.lname}
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
                        value={newStudent.email}
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
                        value={newStudent.username}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="regNum" className="text-right">
                        Registration Number
                      </Label>
                      <Input
                        id="regNum"
                        name="regNum"
                        value={newStudent.regNum}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Add Student
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
                <TableHead>Registration Number</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.fname}</TableCell>
                  <TableCell>{student.lname}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.username}</TableCell>
                  <TableCell>{student.regNum}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteStudent(student.id)}
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
};

export default StudentManagement;
