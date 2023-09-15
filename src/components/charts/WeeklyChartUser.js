import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const englishToPersianDay = (englishDay) => {
  const dayMapping = {
    Sunday: "یکشنبه",
    Monday: "دوشنبه",
    Tuesday: "سه‌شنبه",
    Wednesday: "چهارشنبه",
    Thursday: "پنج‌شنبه",
    Friday: "جمعه",
    Saturday: "شنبه",
  };

  return dayMapping[englishDay] || englishDay;
};

const WeeklyChart = ({ loggedInUserEmail }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint with the loggedInUserEmail as a query parameter
    fetch(`http://localhost:4000/getweeklychartuser?email=${loggedInUserEmail}`)
      .then((response) => response.json())
      .then((apiData) => {
        // Map English day names to Persian day names
        const dataWithPersianDays = apiData.map((item) => ({
          ...item,
          name: englishToPersianDay(item.name),
        }));

        setData(dataWithPersianDays);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [loggedInUserEmail]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="projects" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeeklyChart;
