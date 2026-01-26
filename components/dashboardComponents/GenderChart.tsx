import React from 'react'
import { BiMaleFemale } from 'react-icons/bi';
import DoughNutChart from './DoughNutChart';
import DashboardTable from './DashboardTable';

const transactions = [
    {
      "id": "ksdnfkjsdfx",
      "amount": 4000,
      "quantity": 4,
      "discount": 300,
      "status": "Processing"
    },
    {
      "id": "sdsdssdsd",
      "amount": 5100,
      "quantity": 2,
      "discount": 900,
      "status": "Processing"
    },
    {
      "id": "sdsdcvsssdsd",
      "amount": 13000,
      "quantity": 91,
      "discount": 0,
      "status": "Shipped"
    },
    {
      "id": "dfddddfd",
      "amount": 2300,
      "quantity": 4,
      "discount": 2000,
      "status": "Processing"
    }
  ]
const GenderChart = () => {
  return (
   <section className="transactionContainer">

    <div className='genderChart'>
        <h2>Gender Ration</h2>
        <DoughNutChart 
        labels={["Female","Male"]}
        data={[12,19]}
        backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}
        cutout={90}
        />
        <p><BiMaleFemale/></p>
    </div>
    <DashboardTable data={transactions}/>
    </section>
  )
}

export default GenderChart;