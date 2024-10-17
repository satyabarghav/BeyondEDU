import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Star, FileText, Send, Calendar, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StudentDashboard() {
  const upcomingDeadlines = [
    { id: 1, activity: "Math Project", deadline: "2023-06-20" },
    { id: 2, activity: "Science Fair Submission", deadline: "2023-06-25" },
    { id: 3, activity: "Literature Essay", deadline: "2023-06-30" },
  ]

  const recentAchievements = [
    { id: 1, achievement: "Completed Advanced Math Course", date: "2023-06-15" },
    { id: 2, achievement: "Won 2nd Place in Science Fair", date: "2023-06-10" },
    { id: 3, achievement: "Perfect Attendance Award", date: "2023-06-05" },
  ]

  return (
    <DashboardLayout role="student">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Achievements</CardTitle>
            <Award className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-gray-600">+3 this semester</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ongoing Activities</CardTitle>
            <Star className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-600">2 due next week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completeness</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-gray-600">Add 2 more achievements</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Submissions</CardTitle>
            <Send className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-600">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingDeadlines.map((deadline) => (
                  <TableRow key={deadline.id}>
                    <TableCell>{deadline.activity}</TableCell>
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

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentAchievements.map((achievement) => (
                <li key={achievement.id} className="flex items-center">
                  <Award className="h-4 w-4 text-blue-500 mr-2" />
                  <div>
                    <p className="font-medium">{achievement.achievement}</p>
                    <p className="text-sm text-gray-600">{achievement.date}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4 w-full">
              <TrendingUp className="mr-2 h-4 w-4" />
              View All Achievements
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Skills Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Leadership</span>
              <span className="text-sm font-medium">70%</span>
            </div>
            <Progress value={70} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Teamwork</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <Progress value={85} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Problem Solving</span>
              <span className="text-sm font-medium">60%</span>
            </div>
            <Progress value={60} className="w-full" />
          </div>
          <Button className="w-full">
            Update Skills Assessment
          </Button>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}