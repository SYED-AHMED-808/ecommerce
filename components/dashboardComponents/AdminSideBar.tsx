'use client';

import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { FaChartBar,FaChartPie,FaChartLine,FaStopwatch,FaGamepad } from "react-icons/fa";

const AdminSidebar = () => {
  const path = usePathname();

  const liPages = [
    {
      title: "Dashboard",
      url:"/admin/dashboard",
      Icon:RiDashboardFill
    },
    {
      title:"Product",
      url:"/admin/product",
      Icon:RiShoppingBag3Fill
    },
    {
      title:"Customer",
      url:"/admin/customer",
      Icon:IoIosPeople
    },
    {
      title:"Transaction",
      url:"/admin/transaction",
      Icon:AiFillFileText
    }
  ]
  const liApps = [
    {
      title: "StopWatch",
      url:"/admin/app/stopwatch",
      Icon:FaStopwatch
    },
    {
      title:"Coupan",
      url:"/admin/app/coupon",
      Icon:RiCoupon3Fill
    },
    {
      title:"Toss",
      url:"/admin/app/toss",
      Icon:FaGamepad
    },
  ]
  const liCharts = [
    {
      title: "Bar",
      url:"/admin/charts/bar",
      Icon:FaChartBar
    },
    {
      title:"Pie",
      url:"/admin/charts/pie",
      Icon:FaChartPie
    },
    {
      title:"Line",
      url:"/admin/charts/line",
      Icon:FaChartLine
    },
  ]
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          {liPages.map(({title,url,Icon},index) => (
            <li style={{
              background: path === url ? "rgba(0,115,255,0.1)" : "white"
            }} key={index}>
              <Link href={url}>
                <Icon />
                {title}
              </Link>
            </li>
          ))}
         
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          {liCharts.map(({title,url,Icon},index) => (
            <li style={{
              background: path === url ? "rgba(0,115,255,0.1)" : "white"
            }} key={index}>
              <Link href={url}>
                <Icon />
                {title}
              </Link>
            </li>
          ))}
         
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          {liApps.map(({title,url,Icon},index) => (
            <li style={{
              background: path === url ? "rgba(0,115,255,0.1)" : "white"
            }} key={index}>
              <Link href={url}>
                <Icon />
                {title}
              </Link>
            </li>
          ))}
         
        </ul>
      </div>

    </aside>
  );
};


export default AdminSidebar;
