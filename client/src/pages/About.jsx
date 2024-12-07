'use client'

import { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 space-y-16 pt-24 pb-16">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-blue-800 mb-6">About BeyondEDU</h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed">
            BeyondEDU is a comprehensive platform designed to help students manage their extracurricular activities effectively.
            Our goal is to enhance student engagement and personal growth outside the classroom.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To empower students by providing a user-friendly tool for discovering, participating in, and managing
                extracurricular activities, fostering personal development and building a well-rounded educational experience.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">For Students</h3>
                <ul className="text-purple-100 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Discover new activities and clubs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Manage your extracurricular schedule
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Track your achievements and growth
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-green-400 to-green-600 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">For Schools</h3>
                <ul className="text-green-100 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Streamline activity management
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Increase student engagement
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Generate comprehensive reports
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

