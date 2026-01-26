'use client';
import TableHOC from '../HOC/TableHOC';
import { ColumnDef } from '@tanstack/react-table'

interface TransactionData {
    id:string;
    quantity:number;
    discount:number;
    amount:number;
    status:string;
    
}

const columns:ColumnDef<TransactionData>[] = [
   {
       header: 'ID',
     accessorKey: 'id',
    },
     {
       header: 'Quantity',
     accessorKey: 'quantity',
    },
     {
       header: 'Discount',
     accessorKey: 'discount',
    },
     {
       header: 'Amount',
     accessorKey: 'amount',
    },
     {
       header: 'Status',
     accessorKey: 'status',
    },
]
const DashboardTable = ({data = []}:{data:TransactionData[]}) => {

  return TableHOC<TransactionData>(columns,data,"transactionBox","Top Transactions")();
}

export default DashboardTable