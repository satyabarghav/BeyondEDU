import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Hero() {
  return (
    <>
    <Navbar />
      <div className="h-screen w-full flex flex-col bg-gradient-to-b from-blue-50 to-white"> {/* h-screen and w-full added */}
        <main className="flex-grow flex flex-col justify-center items-center w-full">
          <div className="max-w-7xl mx-auto space-y-16 text-center w-full"> {/* w-full added */}
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
              Welcome to <span className="text-blue-600">BeyondEDU</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage your extracurricular activities with ease and unlock your full potential.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"> {/* w-full added */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-800">Discover</h2>
                  <p className="text-blue-600">Find exciting extracurricular activities that match your interests and goals.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-800">Participate</h2>
                  <p className="text-purple-600">Join clubs, events, and activities to enhance your skills and broaden your horizons.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-green-800">Grow</h2>
                  <p className="text-green-600">Track your progress, build a well-rounded profile, and achieve your personal best.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
      </>
  );
}
