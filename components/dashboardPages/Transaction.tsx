'use client';
import React, { useCallback, useState } from "react";
import TableHOC from "../HOC/TableHOC";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

interface TransactionsDataType {
  user:string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
  action: {
    value:string;
    href:string;
  };
}

const columns: ColumnDef<TransactionsDataType>[] = [
  {
    header: "User",
    accessorKey: "user",
    cell: (info) => info.getValue(),
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header:"Quantity",
    accessorKey:"quantity"
  },
  {
    header:"Status",
    accessorKey:"status",
    cell:(info) => {
      const value = info.getValue();
      const color = value === "Processing" ? "red" : "blue";

      return <p className={color}>
        {value as string}</p>;
    }
  },
   {
    header: "Action",
    accessorKey: "action",
    cell:({row})=>{
      return  <Link href={row.original.action.href}>{row.original.action.value}</Link>
    }
  },
];


const arr:TransactionsDataType[] = [
{
 user:"Chris",
  amount: 2535,
  discount: 300,
  quantity: 1,
  status: "Processing",
   action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
},
{
 user:"Amit",
  amount: 2580,
  discount: 50,
  quantity: 5,
  status: "Processing",
   action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
},
]
const Transaction = () => {
  const [data] = useState<TransactionsDataType[]>(arr);
  const Table = useCallback(
 TableHOC<TransactionsDataType>(columns,data,"dashboardProductBox","Transaction",true)
  ,[])
 
  return <>
  <main>{Table()}</main>
  </>
};

export default Transaction;
