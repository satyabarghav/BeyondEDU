import React from 'react'
import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, Line } from 'recharts'
import { Download, FileText, TrendingUp } from 'lucide-react'

export default function AdminReportsAnalytics() {
  const monthlyData = [
    { name: 'Jan', achievements: 65, participation: 78 },
    { name: 'Feb', achievements: 59, participation: 82 },
    { name: 'Mar', achievements: 80, participation: 85 },
    { name: 'Apr', achievements: 81, participation: 88 },
    { name: 'May', achievements: 56, participation: 75 },
    { name: 'Jun', achievements: 55, participation: 72 },
    { name: 'Jul', achievements: 40, participation: 68 },
  ]

  const categoryData = [
    { name: 'Academic', value: 400 },
    { name: 'Sports', value: 300 },
    { name: 'Arts', value: 200 },
    { name: 'Community Service', value: 278 },
    { name: 'Leadership', value: 189 },
  ]

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Reports and Analytics</h1>
        <div className="flex space-x-2">
          <Select defaultValue="thisMonth">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="thisYear">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Achievement Completion Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="achievements" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Participation Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="participation" stroke="#82ca9d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Achievements by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button className="h-auto py-4 flex flex-col items-center justify-center">
          <FileText className="h-6 w-6 mb-2" />
          <span>Generate Full Report</span>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center" variant="outline">
          <TrendingUp className="h-6 w-6 mb-2" />
          <span>Predictive Analytics</span>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center" variant="outline">
          <Download className="h-6 w-6 mb-2" />
          <span>Download Raw Data</span>
        </Button>
      </div>
    </>
  )
}