import React from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Award, Users, FileText, Clock, Calendar, TrendingUp } from 'lucide-react'

export default function TeacherDashboard() {
  const pendingReviews = [
    { id: 1, student: "Alice Johnson", achievement: "Science Project", submittedDate: "2023-06-15" },
    { id: 2, student: "Bob Smith", achievement: "Math Competition", submittedDate: "2023-06-14" },
    { id: 3, student: "Charlie Brown", achievement: "Literature Essay", submittedDate: "2023-06-13" },
  ]

  const upcomingDeadlines = [
    { id: 1, task: "Grade Science Projects", deadline: "2023-06-20" },
    { id: 2, task: "Submit Monthly Report", deadline: "2023-06-25" },
    { id: 3, task: "Parent-Teacher Meeting", deadline: "2023-06-30" },
  ]

  return (
    <DashboardLayout role="teacher">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <Award className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-600">3 new since yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150</div>
            <p className="text-xs text-gray-600">Across 5 classes</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Due</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-600">Due in the next week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Review Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5 days</div>
            <p className="text-xs text-gray-600">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Pending Achievement Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Achievement</TableHead>
                  <TableHead>Submitted Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingReviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell>{review.student}</TableCell>
                    <TableCell>{review.achievement}</TableCell>
                    <TableCell>{review.submittedDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" className="mt-4 w-full">
              <Award className="mr-2 h-4 w-4" />
              View All Pending Reviews
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingDeadlines.map((deadline) => (
                  <TableRow key={deadline.id}>
                    <TableCell>{deadline.task}</TableCell>
                    <TableCell>{deadline.deadline}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" className="mt-4 w-full">
              <Calendar className="mr-2 h-4 w-4" />
              View Full Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class Performance Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Class A</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <Progress value={85} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Class B</span>
              <span className="text-sm font-medium">72%</span>
            </div>
            <Progress value={72} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Class C</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <Progress value={90} className="w-full" />
          </div>
          <Button className="w-full">
            <TrendingUp className="mr-2 h-4 w-4" />
            View Detailed Performance Reports
          </Button>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}