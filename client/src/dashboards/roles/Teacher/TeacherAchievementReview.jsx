import React from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Award, Search, Filter, CheckCircle, XCircle } from 'lucide-react'

export default function TeacherAchievementReview() {
  const achievements = [
    { id: 1, student: "Alice Johnson", achievement: "Science Project", submittedDate: "2023-06-15", status: "Pending" },
    { id: 2, student: "Bob Smith", achievement: "Math Competition", submittedDate: "2023-06-14", status: "Pending" },
    { id: 3, student: "Charlie Brown", achievement: "Literature Essay", submittedDate: "2023-06-13", status: "Approved" },
    { id: 4, student: "Diana Prince", achievement: "Art Exhibition", submittedDate: "2023-06-12", status: "Rejected" },
    { id: 5, student: "Ethan Hunt", achievement: "Coding Challenge", submittedDate: "2023-06-11", status: "Pending" },
  ]

  return (
    <DashboardLayout role="teacher">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Achievement Review</h1>
        <Button>
          <Award className="mr-2 h-4 w-4" /> Review Guidelines
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Review Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input placeholder="Search achievements..." className="flex-grow" />
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Achievement</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {achievements.map((achievement) => (
                <TableRow key={achievement.id}>
                  <TableCell className="font-medium">{achievement.student}</TableCell>
                  <TableCell>{achievement.achievement}</TableCell>
                  <TableCell>{achievement.submittedDate}</TableCell>
                  <TableCell>
                    <Badge variant={achievement.status === "Approved" ? "success" : achievement.status === "Rejected" ? "destructive" : "default"}>
                      {achievement.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                      <Button variant="outline" size="icon" className="text-green-600">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-600">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}