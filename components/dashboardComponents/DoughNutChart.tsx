'use client';

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  // CategoryScale,
  // LinearScale,
  // BarElement,
  // Title,
  // Tooltip,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  // CategoryScale,
  // LinearScale,
  // BarElement,
  // Title,
  // Tooltip,
  ArcElement,
  Legend
);

interface DoughNutChartProps {
 labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
  
}
const DoughNutChart = ({labels,data,backgroundColor,cutout,legends = true,offset}:DoughNutChartProps) => {
    const doughnutData:ChartData<"doughnut",number[],string> = {
      labels,
      datasets: [{
        data,backgroundColor,borderWidth:0, offset
      }]
    } 
    const doughnutOptions:ChartOptions<"doughnut"> = {
      responsive:true,
      plugins:{
        legend:{
          display:legends,
          position:"bottom",
          labels:{
            padding:40,

          }
        }
      },
      cutout
    }
  return <Doughnut data={doughnutData} options={doughnutOptions}/>
}

export default DoughNutChart