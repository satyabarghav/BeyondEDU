import React from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Upload, Send, Clock, Link } from 'lucide-react'

export default function StudentAchievementSubmission() {
  const pendingSubmissions = [
    { id: 1, achievement: "Science Project", category: "Academic", status: "Under Review", submittedDate: "2023-06-15" },
    { id: 2, achievement: "Volunteer Work", category: "Community Service", status: "Pending", submittedDate: "2023-06-10" },
  ]

  return (
    <DashboardLayout role="student">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Achievement Submission</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Submit New Achievement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="achievementName">Achievement Name</Label>
            <Input id="achievementName" placeholder="Enter the name of your achievement" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select achievement category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="community">Community Service</SelectItem>
                <SelectItem value="leadership">Leadership</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your achievement" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date of Achievement</Label>
            <Input id="date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="evidence">Upload Evidence</Label>
            <div className="flex items-center space-x-2">
              <Input id="evidence" type="file" className="flex-grow" />
              <Button variant="outline" size="icon">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="certificateUrl">Public URL of Certificate (if available)</Label>
            <div className="flex items-center space-x-2">
              <Input id="certificateUrl" type="url" placeholder="https://example.com/certificate" className="flex-grow" />
              <Button variant="outline" size="icon">
                <Link className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">If you have a public URL for your certificate, please enter it here.</p>
          </div>
          <Button className="w-full">
            <Send className="mr-2 h-4 w-4" /> Submit Achievement
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Achievement</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.achievement}</TableCell>
                  <TableCell>{submission.category}</TableCell>
                  <TableCell>
                    <Badge variant={submission.status === "Under Review" ? "default" : "secondary"}>
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{submission.submittedDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}