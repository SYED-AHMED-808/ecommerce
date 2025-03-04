import type { Metadata } from "next";
import "@/styles/dashboard/app.scss";
import AdminSidebar from "@/components/dashboardComponents/AdminSideBar";



export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Ecommerce Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
       <div className="adminContainer">
      <AdminSidebar />
      {children}
     
    </div>
       
      </>
  );
}
