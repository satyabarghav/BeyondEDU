import React, { useState } from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Trash2, Download, Eye, CheckCircle, XCircle } from 'lucide-react'

export default function AdminAchievementManagement() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const achievements = [
    { id: 1, name: "Advanced Math Completion", category: "Academic", points: 100, status: "Active", pendingVerifications: 5, lastUpdated: "2023-06-15", requiresVerification: true },
    { id: 2, name: "Science Fair Gold Medal", category: "Competition", points: 150, status: "Active", pendingVerifications: 2, lastUpdated: "2023-06-14", requiresVerification: true },
    { id: 3, name: "Community Service 50 Hours", category: "Volunteer", points: 75, status: "Inactive", pendingVerifications: 0, lastUpdated: "2023-06-10", requiresVerification: false },
    { id: 4, name: "Debate Team Captain", category: "Leadership", points: 120, status: "Active", pendingVerifications: 3, lastUpdated: "2023-06-13", requiresVerification: true },
    { id: 5, name: "Perfect Attendance", category: "General", points: 50, status: "Active", pendingVerifications: 0, lastUpdated: "2023-06-12", requiresVerification: false },
    { id: 6, name: "Coding Challenge Winner", category: "Academic", points: 100, status: "Pending", pendingVerifications: 1, lastUpdated: "2023-06-16", requiresVerification: true },
  ]

  const filteredAchievements = achievements.filter(achievement => 
    (activeTab === "all" || achievement.status.toLowerCase() === activeTab) &&
    (selectedCategory === "all" || achievement.category === selectedCategory)
  )

  const categories = ["Academic", "Competition", "Volunteer", "Leadership", "General"]

  const totalAchievements = achievements.length
  const activeAchievements = achievements.filter(a => a.status === "Active").length
  const pendingVerifications = achievements.reduce((sum, a) => sum + a.pendingVerifications, 0)

  return (
    <DashboardLayout role="admin">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Achievement Management</h1>
        <div className="space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Achievement
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Achievement Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalAchievements}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeAchievements}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{categories.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingVerifications}</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search achievements..." className="flex-grow" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
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
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pending Verifications</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAchievements.map((achievement) => (
                    <TableRow key={achievement.id}>
                      <TableCell className="font-medium">{achievement.name}</TableCell>
                      <TableCell>{achievement.category}</TableCell>
                      <TableCell>{achievement.points}</TableCell>
                      <TableCell>
                        <Badge variant={
                          achievement.status === "Active" ? "success" :
                          achievement.status === "Inactive" ? "secondary" :
                          "warning"
                        }>
                          {achievement.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{achievement.pendingVerifications}</TableCell>
                      <TableCell>{achievement.lastUpdated}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" /> View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" /> Edit
                          </Button>
                          {achievement.requiresVerification && (
                            <>
                              <Button variant="outline" size="icon" className="text-green-600">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className="text-red-600">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}