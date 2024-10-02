import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <>
    <Navbar/>
    <div className="space-y-16 pt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About BeyondEDU</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          StudentExtra is a comprehensive platform designed to help students manage their extracurricular activities effectively.
          Our goal is to enhance student engagement and personal growth outside the classroom.
        </p>
      </div>
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h2>
          <p className="text-blue-700">
            To empower students by providing a user-friendly tool for discovering, participating in, and managing
            extracurricular activities, fostering personal development and building a well-rounded educational experience.
          </p>
        </CardContent>
      </Card>
      <div className="grid sm:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">For Students</h3>
            <ul className="list-disc list-inside text-purple-700 space-y-2">
              <li>Discover new activities and clubs</li>
              <li>Manage your extracurricular schedule</li>
              <li>Track your achievements and growth</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">For Schools</h3>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Streamline activity management</li>
              <li>Increase student engagement</li>
              <li>Generate comprehensive reports</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}