import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, User, Lock, AlertCircle, Home } from 'lucide-react';
import axios from 'axios';
import { toast, Toaster } from "sonner";
import route from './../config';

const Icons = {
  spinner: Loader2,
  user: User,
  lock: Lock,
  alertCircle: AlertCircle,
  home: Home,
  google: (props) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
};

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const user = {
        usernameOrEmail,
        password,
      };

      const response = await axios.post(`${route}/auth/login`, user);

      // Check HTTP Status Code
      if (response.status === 200) {
        // Success response, handle based on role
        const { role, token, firstLogin, email, regNum } = response.data;
        sessionStorage.setItem("regNum", regNum);
        sessionStorage.setItem("jwtToken", token);

        // Show success toast
        toast.success("Login successful! Redirecting...");

        // Navigate to the appropriate dashboard after 2 seconds
        setTimeout(() => {
          if (role === "ADMIN") {
            navigate("/admin");
          } else if (firstLogin && (role === "STUDENT" || role === "TEACHER")) {
            navigate("/reset-password");
          } else if (role === "STUDENT") {
            navigate("/student");
          } else if (role === "TEACHER") {
            navigate("/teacher");
          } else {
            navigate("/login");
          }
        }, 2000);
      } else {
        // If status is not 200 (e.g., 400, 401, etc.), show a toast with the status message
        toast.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      // Handle Error
      if (err.response) {
        // Server errors (e.g., 4xx, 5xx)
        const { status, data } = err.response;
        if (status === 400 || status === 401) {
          toast.error(data.message || "Invalid credentials");
        } else {
          toast.error(`Server error: ${data.message || "An error occurred"}`);
        }
      } else {
        // Network errors, timeout, etc.
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 relative">
      <Toaster richColors />
      <Link to="/" className="absolute top-4 left-4">
        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/50 hover:bg-white/70 transition-colors">
          <Icons.home className="h-5 w-5 text-gray-600" />
        </Button>
      </Link>
      <Card className="w-full max-w-4xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} />
          <div className="md:w-1/2 p-8 bg-white">
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-bold text-center text-gray-800">Log In</CardTitle>
              <p className="text-center text-sm text-gray-600">
                Enter your credentials to access your account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Username or Email</Label>
                  <div className="relative">
                    <Icons.user className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="text"
                      placeholder="johndoe@example.com"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <div className="relative">
                    <Icons.lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {error && (
                  <div className="bg-red-100 text-red-600 text-sm p-3 rounded-md flex items-center gap-2">
                    <Icons.alertCircle className="h-4 w-4" />
                    <p>{error}</p>
                  </div>
                )}
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  {isLoading ? "Logging in..." : "Log In"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-300 h-px flex-grow" />
                <span className="text-sm text-gray-500">OR</span>
                <div className="bg-gray-300 h-px flex-grow" />
              </div>
              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                <Icons.google className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
