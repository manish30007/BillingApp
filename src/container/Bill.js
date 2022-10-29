import React from 'react'
// import { useSelector } from "react-redux";
const Bill = (props) => {
    const {id,date,category,amount,description}=props.product;
    const {product,updateBill,deleteBill}=props;
  return (
    <div className='my-2'>
    <div className="card" >
    <div>
        <span className='mx-2'><b>Id</b>:{id}</span>
        <span className='mx-2'><b>Date</b>:{date}</span>
        <span className='mx-2' ><b>Category</b>:{category}</span>
        <span className='mx-2' style={{float:"right"}}><b>Amount</b>:{amount}</span>
        <p className='mx-2'><b>Description</b>:{description}</p>
        <i className={`fas fa-trash mx-3 ${props.flag===1?"d-none":""}`} onClick={()=>{deleteBill(product.id);}}></i>
        <i className={`fa-regular fa-pen-to-square mx-3  ${props.flag===1?"d-none":""}`}  onClick={()=>{updateBill(product)}}></i>

    </div>
    </div>
    </div>
  )
}

export default Bill
