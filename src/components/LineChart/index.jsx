import { memo } from "react";
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
import { ChartContainer, ChartTitle } from "./styles";
import ChartLoader from "../ChartLoader";

const chartVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function CustomLineChart({ title, data, dataKey, xAxisKey }) {
  const hasData = data && data.length > 0;

  return (
    <ChartContainer
      variants={chartVariants}
      initial="hidden"
      animate="visible"
    >
      <ChartTitle>{title}</ChartTitle>
      {hasData ? (
        <ResponsiveContainer debounce={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, "Variação"]}
              labelStyle={{ fontSize: 14, fontWeight: "bold" }}
              itemStyle={{ fontSize: 12 }}
            />
            <Legend iconSize={10} wrapperStyle={{ fontSize: 14 }} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <ChartLoader />
      )}
    </ChartContainer>
  );
}

export default memo(CustomLineChart);
