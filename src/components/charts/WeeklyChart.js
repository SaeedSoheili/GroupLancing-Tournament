import React, { PureComponent } from "react";
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

const data = [
  {
    name: "شنبه",
    projects: 4000,
    income: 2400,
    amt: 2400,
  },
  {
    name: "یکشنبه",
    projects: 3000,
    income: 1398,
    amt: 2210,
  },
  {
    name: "دوشنبه",
    projects: 2000,
    income: 9800,
    amt: 2290,
  },
  {
    name: "سه شنبه",
    projects: 2780,
    income: 3908,
    amt: 2000,
  },
  {
    name: "چهارشنبه",
    projects: 1890,
    income: 4800,
    amt: 2181,
  },
  {
    name: "پنجشنبه",
    projects: 2390,
    income: 3800,
    amt: 2500,
  },
  {
    name: "جمعه",
    projects: 3490,
    income: 4300,
    amt: 2100,
  },
];

export default class WeeklyChart extends PureComponent {
  render() {
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
  }
}
