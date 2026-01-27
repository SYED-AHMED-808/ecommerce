'use client';
import React, { useCallback, useState } from "react";
import TableHOC from "../HOC/TableHOC";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaTrash } from "react-icons/fa";

interface CustomersDataType {
  avatar: {
    img:string;
    alt:string;
  };
  name: string;
  gender: string;
  email: string;
  role: string;
  action: {
    value:string;
  };
}

const columns: ColumnDef<CustomersDataType>[] = [
  {
    header: "Avatar",
    accessorKey: "avatar",
    cell: ({ row }) => {
      return <Image style={{borderRadius:"50%"}} src={row.original.avatar.img} alt={row.original.avatar.alt} width={20} height={20} />
    }
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: (info) => info.getValue(),
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header:"Role",
    accessorKey:"role"
  },
  {
    header: "Action",
    accessorKey: "action",
    cell:()=>{
      return  <button><FaTrash/></button>
    }
  },
];

const img = "https://randomuser.me/api/portraits/men/94.jpg";
const img2= "https://randomuser.me/api/portraits/women/72.jpg";
const arr:CustomersDataType[] = [
{
  avatar: {img:img,
    alt:"John"
  },
  name: "John Smitter",
  email: "john.smitter@email.com",
  gender:"Male",
  role:"User",
  action:
  {
    value:"NA"
  }
},
{
  avatar: {
    img:img2,
    alt:"Mac"
  },
name: "Emily Palmer",
  email: "emily.palmer@email.com",
  gender:"Female",
  role:"User",
  action: {
    value:"NA"
  }
   
},

]
const Customers = () => {
  const [data] = useState<CustomersDataType[]>(arr);
  const Table = useCallback(
 TableHOC<CustomersDataType>(columns,data,"dashboardProductBox","Customers",true)
  ,[])
 
  return <>
  <main>{Table()}</main>
  </>
};

export default Customers;
