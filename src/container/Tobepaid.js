import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useEffect} from 'react';
import Bill from './Bill';

const Tobepaid = () => {
    let amt=0;
    let flag=1;
    const products = useSelector((state) => state.allProducts.products);
    useEffect(()=>{
   products.sort((a, b) =>parseInt(b.amount ) - parseInt(a.amount));
        },[])
  return (
    <div className="my-3">
      <h5>A minimum number of bills that should be paid</h5>
      <div>
        {
        products.map((product) => {
       
       amt=amt+parseInt(product.amount);
       if(amt>50000)return;
       else
          return (
            <Bill key={product.id} product={product} flag={flag}/>
          );
        })}
      
    </div>
    </div>
  )
}

export default Tobepaid
