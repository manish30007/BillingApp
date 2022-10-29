import React from 'react';
import Bill from './Bill';
import  {useRef, useState } from "react";
import { setProducts,sumproducts } from "../redux/action/productAction";
import { useDispatch,useSelector } from "react-redux";
import AddBill from './AddBill';
import Tobepaid from './Tobepaid';
import { useEffect } from 'react';
const BillList = () => {  
  const sum = useSelector((state) => state.sum_amount.sum);
  // let summ= useSelector((state) => state.sum_amount.sum);
  const dispatch = useDispatch();
  useEffect(()=>{
    let val=0;
 for(let i=0;i<products.length;i++){
  val=val+parseInt(products[i].amount);
 }
dispatch(sumproducts(val));
    },[])
      const products = useSelector((state) => state.allProducts.products);
      const [bill, setBill] = useState({
        id: "",
        ecategory: "",
        edescription: "",
        eamount:"",
        edate:"",
      });
      const ref = useRef(null);
      const closeref = useRef(null);
      const updateBill = (currentbill) => {
        ref.current.click();
        setBill({
          id: currentbill.id,
          ecategory:currentbill.category,
          edescription: currentbill.description,
          eamount:currentbill.amount,
          edate: currentbill.date,
        });
        dispatch(sumproducts(sum-parseInt(currentbill.amount)));
      };
       const onChange = (e) => {
        setBill({ ...bill, [e.target.name]: e.target.value });
      };
  const  editbill=(id,description,category,amount,date)=>{
    
  
      const newBill=JSON.parse(JSON.stringify(products))
    for(let index=0;index<products.length;index++){
    const element=products[index];
    if(element.id===id){
   
      newBill[index].description=description;
      newBill[index].category=category;
      newBill[index].amount=amount;
      newBill[index].date=date;
       break;
    }
    }
    dispatch(sumproducts(sum+parseInt(amount)));
    dispatch(setProducts(newBill));
  }
  const deleteBill=(id)=>{
    const newBill=products.filter((bill)=>{return bill.id!==id;
    });
    dispatch(setProducts(newBill));
  }
  const handleClick = () => {

    editbill(bill.id, bill.edescription, bill.ecategory,bill.eamount,bill.edate);
    closeref.current.click();
    
  };
  return (
  <>
  <Tobepaid key="tobepaid"/>
  <div  className="my-3" style={{display:"flex",justifyContent:"space-between"}}>
<AddBill key="addbill"/>
<div style={{float:"right"}}><h5>Total bill:{sum}</h5></div>
  </div >
     <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit bill
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                  Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={bill.edescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ecategory" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ecategory"
                    name="ecategory"
                    onChange={onChange}
                    value={bill.ecategory}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eamount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="eamount"
                    name="eamount"
                    onChange={onChange}
                    value={bill.eamount}
                  />  
                </div>
                <div className="mb-3">
                  <label htmlFor="edate" className="form-label">
                    Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edate"
                    name="edate"
                    onChange={onChange}
                    value={bill.edate}
                  />   
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={closeref}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update bill
              </button>
            </div>
          </div>
        </div> 
      </div>
      <div >
        <h4>Your All Bills</h4>
        <div className="container">
          {products.length === 0 && "No bill to display"}
        </div>
        {products.map((product) => {
          return (
            // <Bill   product={product}/>

            <Bill key={product.id} updateBill={updateBill} deleteBill={deleteBill} product={product}/>
          );
        })}
      </div>
      </>
  )
}

export default BillList
