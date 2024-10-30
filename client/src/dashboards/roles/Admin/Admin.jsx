import  { useState } from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, Award, Calendar, TrendingUp, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week")

  const recentAchievements = [
    { id: 1, student: "Alice Johnson", achievement: "Completed Advanced Math Course", date: "2023-06-15" },
    { id: 2, student: "Bob Smith", achievement: "Won Science Fair Project", date: "2023-06-14" },
    { id: 3, student: "Charlie Brown", achievement: "Perfect Attendance Award", date: "2023-06-13" },
    { id: 4, student: "Diana Prince", achievement: "Leadership Excellence Certificate", date: "2023-06-12" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="This Week">This Week</SelectItem>
            <SelectItem value="This Month">This Month</SelectItem>
            <SelectItem value="This Year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Achievements</CardTitle>
            <Award className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-600">+20% from last {selectedPeriod.toLowerCase()}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-gray-600">+5% from last {selectedPeriod.toLowerCase()}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ongoing Activities</CardTitle>
            <Calendar className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-gray-600">+12 new this {selectedPeriod.toLowerCase()}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participation Rate</CardTitle>
            <BarChart className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-gray-600">+3% from last {selectedPeriod.toLowerCase()}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Achievement</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAchievements.map((achievement) => (
                  <TableRow key={achievement.id}>
                    <TableCell>{achievement.student}</TableCell>
                    <TableCell>{achievement.achievement}</TableCell>
                    <TableCell>{achievement.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" className="mt-4 w-full">View All Achievements</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button className="w-full">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button className="w-full">
              <Award className="mr-2 h-4 w-4" />
              Create Achievement
            </Button>
            <Button className="w-full">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>New achievement type &quot;Community Service&quot; has been added to the system.</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Scheduled maintenance: The system will be down for updates on Sunday, 2AM-4AM.</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Monthly report for June 2023 is now available for download.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      </div>
  )
}