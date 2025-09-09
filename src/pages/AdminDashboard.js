// src/pages/AdminDashboard.js
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [loginData, setLoginData] = useState([]);
  const [userDistribution, setUserDistribution] = useState([]);
  const [marketingQueries, setMarketingQueries] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [joinData, setJoinData] = useState([]);

  const COLORS = ["#1f2937", "#2563eb", "#9333ea"]; // dark gray, blue, purple

  useEffect(() => {
    // 1. Total logins per day
    const logins = JSON.parse(localStorage.getItem("loginHistory")) || [];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const loginsPerDay = days.map((day, i) => ({
      day,
      logins: logins.filter((l) => new Date(l).getDay() === i).length,
    }));
    setLoginData(loginsPerDay);

    // 2. Users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const activeUsers = users.filter((u) => u.lastLogin).length;

    // 3. Marketing queries
    const queries = JSON.parse(localStorage.getItem("marketingQueries")) || [];
    setMarketingQueries(queries);

    // 4. Reports
    const reports = JSON.parse(localStorage.getItem("reports")) || [];
    const reportCountPerWeek = [0, 0, 0, 0];
    reports.forEach((r) => {
      const weekNum = Math.floor(new Date(r.date).getDate() / 7);
      reportCountPerWeek[weekNum] = (reportCountPerWeek[weekNum] || 0) + 1;
    });
    setReportData(
      reportCountPerWeek.map((count, i) => ({
        week: `Week ${i + 1}`,
        reports: count,
      }))
    );

    // 5. Join Us data
    const storedJoin = JSON.parse(localStorage.getItem("joinFormData")) || [];
    const joinRequests = Array.isArray(storedJoin) ? storedJoin : [storedJoin];
    setJoinData(joinRequests);

    // 6. User distribution
    setUserDistribution([
      { name: "Active Users", value: activeUsers },
      { name: "Inactive Users", value: users.length - activeUsers },
      { name: "Join Requests", value: joinRequests.length },
    ]);

    // 7. Notifications
    const notif = [];
    if (users.length > 0)
      notif.push({
        id: 1,
        message: `${users.length} users registered`,
        type: "success",
      });
    if (queries.length > 0)
      notif.push({
        id: 2,
        message: `${queries.length} marketing queries`,
        type: "info",
      });
    if (reports.length > 0)
      notif.push({
        id: 3,
        message: `${reports.length} reports generated`,
        type: "warning",
      });
    if (joinRequests.length > 0)
      notif.push({
        id: 4,
        message: `${joinRequests.length} join requests received`,
        type: "info",
      });
    setNotifications(notif);
  }, []);

  // Derived stats
  const totalLogins = loginData.reduce((sum, d) => sum + d.logins, 0);
  const activeUsers =
    userDistribution.find((u) => u.name === "Active Users")?.value || 0;
  const inactiveUsers =
    userDistribution.find((u) => u.name === "Inactive Users")?.value || 0;
  const joinRequests =
    userDistribution.find((u) => u.name === "Join Requests")?.value || 0;
  const totalReports = reportData.reduce((sum, r) => sum + r.reports, 0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>
      </div>

      {/* Unified Dashboard Card */}
      <main className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow w-full space-y-8">
        {/* 1. Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 border-b border-gray-300 dark:border-gray-700 pb-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Total Logins
            </h3>
            <p className="text-2xl font-bold text-indigo-600">{totalLogins}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Active Users
            </h3>
            <p className="text-2xl font-bold text-green-600">{activeUsers}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Inactive Users
            </h3>
            <p className="text-2xl font-bold text-red-600">{inactiveUsers}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Reports Generated
            </h3>
            <p className="text-2xl font-bold text-blue-600">{totalReports}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Join Requests
            </h3>
            <p className="text-2xl font-bold text-purple-600">{joinRequests}</p>
          </div>
        </div>

        {/* 2. User Distribution + Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-300 dark:border-gray-700 pb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              User Distribution
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={userDistribution}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {userDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Reports Generated
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={reportData}>
                <XAxis dataKey="week" stroke="#000" />
                <YAxis stroke="#000" />
                <Tooltip />
                <Bar dataKey="reports" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Marketing Queries */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Marketing Queries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketingQueries.map((q, i) => (
              <div
                key={i}
                className="bg-indigo-500/20 dark:bg-indigo-800/40 p-4 rounded-lg"
              >
                <p className="font-semibold text-gray-800 dark:text-white">
                  {q.name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {q.email}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-200">
                  {q.query}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Join Us Requests */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Join Us Requests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {joinData.map((j, i) => (
              <div
                key={i}
                className="p-4 bg-purple-500/20 dark:bg-purple-800/40 rounded-lg"
              >
                <p className="font-semibold text-gray-800 dark:text-white">
                  {j.name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {j.email}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-200">
                  {j.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Notifications */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Notifications
          </h2>
          <div className="space-y-2">
            {notifications.map((n, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  n.type === "success"
                    ? "bg-green-200"
                    : n.type === "warning"
                    ? "bg-yellow-200"
                    : "bg-blue-200"
                }`}
              >
                <p className="text-gray-800">{n.message}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
