import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminAchievementManagement() {
  const achievements = [
    { id: 1, name: "Advanced Math Completion", category: "Academic", points: 100, status: "Active" },
    { id: 2, name: "Science Fair Gold Medal", category: "Competition", points: 150, status: "Active" },
    { id: 3, name: "Community Service 50 Hours", category: "Volunteer", points: 75, status: "Inactive" },
    { id: 4, name: "Debate Team Captain", category: "Leadership", points: 120, status: "Active" },
    { id: 5, name: "Perfect Attendance", category: "General", points: 50, status: "Active" },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Achievement Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Achievement
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Achievement Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search achievements..." className="flex-grow" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Achievement List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {achievements.map((achievement) => (
                <TableRow key={achievement.id}>
                  <TableCell className="font-medium">{achievement.name}</TableCell>
                  <TableCell>{achievement.category}</TableCell>
                  <TableCell>{achievement.points}</TableCell>
                  <TableCell>
                    <Badge variant={achievement.status === "Active" ? "default" : "secondary"}>
                      {achievement.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
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