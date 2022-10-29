import React from 'react'
import {BarChart,XAxis,YAxis,Bar} from 'recharts';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
const Baarchart = () => {
  const products = useSelector((state) => state.allProducts.products);
  let newBill=JSON.parse(JSON.stringify(products))
  const data= [
    {
 
    "amount": 430,
    "date": "01-02-2020"
    },
    {

    "amount": 500,
    "date": "01-06-2020"
    },
    {
  
    "amount": 2030,
    "date": "01-07-2020"
    },
    {

    "amount": 35900,
    "date": "01-03-2020"
    },
    {
   
    "amount": 2200,
    "date": "01-12-2020"
    },
    {

    "amount": 320,
    "date": "01-14-2020"
    },
    {

    "amount": 3430,
    "date": "01-18-2020"
    }
    ]

  
  return (
    <div>
      <h1>Chart</h1>
      <BarChart width={1100} height={500} data={data}>
        <XAxis dataKey="date"/>
        <YAxis dataKey="amount"/>
        <Bar dataKey="amount" fill="red"/>
      </BarChart>
    </div>
  )
}

export default Baarchart

