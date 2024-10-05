import DashboardLayout from '@/dashboards/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, FileText, BarChart } from 'lucide-react'

export default function TeacherDashboard() {
  return (
    <DashboardLayout role="teacher">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-600">5 new since yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students Mentored</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-gray-600">+3 new this week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-gray-600">This month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Student Progress</CardTitle>
            <BarChart className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-gray-600">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
      {/* Add more teacher-specific components here */}
    </DashboardLayout>
  )
}