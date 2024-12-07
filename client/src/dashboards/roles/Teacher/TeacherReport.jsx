import React from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { FileText, Download, Send } from 'lucide-react'

export default function TeacherReportsAndFeedback() {
  const reports = [
    { id: 1, name: "Monthly Progress Report", dueDate: "2023-06-30", status: "Pending" },
    { id: 2, name: "Student Performance Analysis", dueDate: "2023-07-15", status: "In Progress" },
    { id: 3, name: "Curriculum Feedback", dueDate: "2023-07-31", status: "Completed" },
  ]

  const performanceData = [
    { subject: "Math", averageScore: 85 },
    { subject: "Science", averageScore: 78 },
    { subject: "English", averageScore: 82 },
    { subject: "History", averageScore: 76 },
    { subject: "Art", averageScore: 90 },
  ]

  return (
    <DashboardLayout role="teacher">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Reports and Feedback</h1>
        <Button>
          <FileText className="mr-2 h-4 w-4" /> Generate New Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    
                    <TableCell>{report.dueDate}</TableCell>
                    <TableCell>
                      <Badge variant={report.status === "Completed" ? "success" : report.status === "In Progress" ? "warning" : "default"}>
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        {report.status === "Completed" ? <Download className="h-4 w-4 mr-2" /> : <Send className="h-4 w-4 mr-2" />}
                        {report.status === "Completed" ? "Download" : "Submit"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Class Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="averageScore" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Alice Johnson</TableCell>
                <TableCell>Math</TableCell>
                <TableCell>2023-06-15</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View Feedback</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Smith</TableCell>
                <TableCell>Science</TableCell>
                <TableCell>2023-06-14</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View Feedback</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Charlie Brown</TableCell>
                <TableCell>English</TableCell>
                <TableCell>2023-06-13</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View Feedback</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}