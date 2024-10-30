import React from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Download, BarChart2 } from 'lucide-react'

export default function AdminParticipationTracking() {
  const participationData = [
    { id: 1, student: "Alice Johnson", totalActivities: 15, completedActivities: 12, participationRate: "80%" },
    { id: 2, student: "Bob Smith", totalActivities: 15, completedActivities: 14, participationRate: "93%" },
    { id: 3, student: "Charlie Brown", totalActivities: 15, completedActivities: 10, participationRate: "67%" },
    { id: 4, student: "Diana Prince", totalActivities: 15, completedActivities: 15, participationRate: "100%" },
    { id: 5, student: "Ethan Hunt", totalActivities: 15, completedActivities: 11, participationRate: "73%" },
  ]

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Participation Tracking</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Participation Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">250</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Participation Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search students..." className="flex-grow" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Student Participation</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Total Activities</TableHead>
                <TableHead>Completed Activities</TableHead>
                <TableHead>Participation Rate</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {participationData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">{data.student}</TableCell>
                  <TableCell>{data.totalActivities}</TableCell>
                  <TableCell>{data.completedActivities}</TableCell>
                  <TableCell>
                    <Badge variant={parseInt(data.participationRate) >= 80 ? "default" : "secondary"}>
                      {data.participationRate}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <BarChart2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}