import React, { useState, useEffect } from "react";
import api from "@/api";
import DashboardLayout from "@/dashboards/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Line,
} from "recharts";

export default function AdminReportsAnalytics() {
  const [categoryData, setCategoryData] = useState([]);
  const [dailyEventData, setDailyEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy fallback data
  const dummyCategoryData = [
    { name: "Academic", value: 400 },
    { name: "Sports", value: 300 },
    { name: "Arts", value: 200 },
    { name: "Community Service", value: 278 },
    { name: "Leadership", value: 189 },
  ];

  const dummyDailyEventData = [
    { name: "2024-01-01", events: 5 },
    { name: "2024-01-02", events: 8 },
    { name: "2024-01-03", events: 4 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [categoryResponse, dailyEventResponse] = await Promise.all([
          api.get("/api/reports/categories"),
          api.get("/api/reports/events/daily"),
        ]);

        // Process category data
        if (Array.isArray(categoryResponse.data)) {
          const transformedCategoryData = categoryResponse.data.map((item) => ({
            name: item.category,
            value: item.value,
          }));
          setCategoryData(transformedCategoryData);
        } else {
          console.error("Unexpected category data:", categoryResponse.data);
          setCategoryData(dummyCategoryData);
        }

        // Process daily event data
        if (Array.isArray(dailyEventResponse.data)) {
          const transformedDailyEventData = dailyEventResponse.data.map((item) => ({
            name: item.date,
            events: item.eventCount,
          }));
          setDailyEventData(transformedDailyEventData);
        } else {
          console.error("Unexpected daily event data:", dailyEventResponse.data);
          setDailyEventData(dummyDailyEventData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCategoryData(dummyCategoryData); // Fallback category data
        setDailyEventData(dummyDailyEventData); // Fallback daily event data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout role="admin">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Reports and Analytics
      </h1>

      {/* Achievements by Category */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Achievements by Category</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : (
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
          )}
        </CardContent>
      </Card>

      {/* Daily Event Counts */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Daily Event Counts</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyEventData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="events" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
