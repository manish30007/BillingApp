import React from 'react'
import  {  useRef, useState } from "react";
import { setProducts, sumproducts } from "../redux/action/productAction";
import { useDispatch,useSelector } from "react-redux";
const AddBill = () => {
    const products = useSelector((state) => state.allProducts.products);
    let sum = useSelector((state) => state.sum_amount.sum);
      const dispatch = useDispatch();
      const [abill,setnbill] = useState({
        id: "",
        category: "",
        description: "",
        amount:"",
        date:"",
      });
 
      const closeref = useRef(null);
     
       const onChange = (e) => {
       setnbill({ ...abill, [e.target.name]: e.target.value });
       };
       const  AddNewBill=(abill)=>{
       const newBill=products.concat(abill);
       sum=sum+parseInt(abill.amount);
       dispatch(sumproducts(sum));
       dispatch(setProducts(newBill));
       }
 
       const handleClick = () => {
       AddNewBill(abill);
       setnbill({id:"",category:"",description:"",amount:"",date:""});
       closeref.current.click();
       };
  return (
    <>
     
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Add Bill
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Add Bill</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                    Id
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={abill.id}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                    Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={abill.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                     Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      name="category"
                      onChange={onChange}
                      value={abill.category}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      name="amount"
                      onChange={onChange}
                      value={abill.amount}
                    />  
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      name="date"
                      onChange={onChange}
                      value={abill.date}
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
                  Add Bill
                </button>
              </div>
            </div>
          </div>
        </div>
    {/* <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Bill
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
                 Add Bill
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
                    <label htmlFor="id" className="form-label">
                    Id
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={abill.id}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                    Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={abill.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                     Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      name="category"
                      onChange={onChange}
                      value={abill.category}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      name="amount"
                      onChange={onChange}
                      value={abill.amount}
                    />  
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      name="date"
                      onChange={onChange}
                      value={abill.date}
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
                  Add Bill
                </button>
              </div>
            </div>
          </div>
        </div> */}
        </>
       
  )
}

export default AddBill

