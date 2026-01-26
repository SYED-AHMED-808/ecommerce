'use client';
import React, { useCallback, useState } from "react";
import TableHOC from "../HOC/TableHOC";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

interface ProductsDataType {
  photo: {
    img:string;
    alt:string;
  };
  name: string;
  price: number;
  stock: number;
  action: {
    href:string;
    value:string;
  };
}

const columns: ColumnDef<ProductsDataType>[] = [
  {
    header: "Photo",
    accessorKey: "photo",
    cell: ({ row }) => {
      return <Image src={row.original.photo.img} alt={row.original.photo.alt} width={20} height={20} />
    }
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: (info) => info.getValue(),
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell:({row})=>{
      return  <Link href={row.original.action.href}>{row.original.action.value}</Link>
    }
  },
];

const img = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2= "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D";
const arr:ProductsDataType[] = [
{
  photo: {img:img,
    alt:"Shoes"
  },
  name: "Puma Shoes Air Jordan Cook Nigga 2023",
  price: 690,
  stock: 3,
  action:
  {
    href:"/admin/product/sajKnaskd",
    value:"Manage"
  }
},
{
  photo: {
    img:img2,
    alt:"Mac"
  },
  name: "Macbook",
  price: 2322,
  stock: 213,
  action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
   
},
{
  photo: {img:img,
    alt:"Shoes"
  },
  name: "Puma Shoes Air Jordan Cook Nigga 2023",
  price: 690,
  stock: 3,
  action:
  {
    href:"/admin/product/sajKnaskd",
    value:"Manage"
  }
},
{
  photo: {
    img:img2,
    alt:"Mac"
  },
  name: "Macbook",
  price: 2322,
  stock: 213,
  action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
   
},
{
  photo: {img:img,
    alt:"Shoes"
  },
  name: "Puma Shoes Air Jordan Cook Nigga 2023",
  price: 690,
  stock: 3,
  action:
  {
    href:"/admin/product/sajKnaskd",
    value:"Manage"
  }
},
{
  photo: {
    img:img2,
    alt:"Mac"
  },
  name: "Macbook",
  price: 2322,
  stock: 213,
  action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
   
},
{
  photo: {img:img,
    alt:"Shoes"
  },
  name: "Puma Shoes Air Jordan Cook Nigga 2023",
  price: 690,
  stock: 3,
  action:
  {
    href:"/admin/product/sajKnaskd",
    value:"Manage"
  }
},
{
  photo: {
    img:img2,
    alt:"Mac"
  },
  name: "Macbook",
  price: 2322,
  stock: 213,
  action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
   
},
{
  photo: {img:img,
    alt:"Shoes"
  },
  name: "Puma Shoes Air Jordan Cook Nigga 2023",
  price: 690,
  stock: 3,
  action:
  {
    href:"/admin/product/sajKnaskd",
    value:"Manage"
  }
},
{
  photo: {
    img:img2,
    alt:"Mac"
  },
  name: "Macbook",
  price: 2322,
  stock: 213,
  action: {
    href:"/admin/product/sajKnaskdjdn",
    value:"Manage"
  }
   
},
]
const Products = () => {
  const [data] = useState<ProductsDataType[]>(arr);
  const Table = useCallback(
 TableHOC<ProductsDataType>(columns,data,"dashboardProductBox","Products",true)
  ,[])
 
  return <>
  <main>{Table()}</main>
  <Link href="/admin/product/new" className="createProductBtn">
  <FaPlus />
  </Link>
  </>
};

export default Products;
