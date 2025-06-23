'use client'
import React from "react";
import BarChart from "./BarChart";

const RevenueChart = () => {
  return (
    <div className="revenueChart">
      <h2>Revenue & Transaction</h2>
      <BarChart
        data_1={[300, 144, 433, 655, 237, 755, 190]}
        data_2={[200, 444, 343, 556, 778, 455, 990]}
        title_1="Revenue"
        title_2="Transaction"
        bgColor_1="rgb(0,115,255)"
        bgColor_2="rgba(53,162,235,0.8)"
      />
    </div>
  );
};

export default RevenueChart;
