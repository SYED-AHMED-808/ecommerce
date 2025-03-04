import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import WidgetItem from "@/components/dashboardComponents/WidgetItem";
const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="bar">
        <BsSearch />
        <input type="text" placeholder="Search for data, users, docs" />
        <FaRegBell />
        <Image src={profile} alt="profile" width="20" height="20" />
      </div>
      <section className="widgetContainer">
        <WidgetItem
          amount={true}
          percent={40}
          value={340000}
          heading="Revenue"
          color="rgba(0,155,255,1)"
        />
        <WidgetItem
          amount={false}
          percent={25}
          value={340000}
          heading="User"
          color="rgb(0 198 202)"
        />
        <WidgetItem
          amount={false}
          percent={-10}
          value={10000}
          heading="Transactions"
          color="rgb(255 196 0)"
        />
        <WidgetItem
          amount={false}
          percent={90}
          value={30}
          heading="Products"
          color="rgb(76 0 255)"
        />
      </section>
      <section className="graphContainer">
        
      </section>
    </main>
  );
};

export default Dashboard;
