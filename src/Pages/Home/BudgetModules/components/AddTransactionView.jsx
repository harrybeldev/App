/* eslint-disable react/prop-types */
import "../componentStyles/AddTransactionView.css"
import { useState } from "react";

const AddTransactionView = (props) => {
  const [amount,setAmount] = useState();
  const [desc,setDesc] = useState();
  const [type,setType] = useState("Expense");
  const addTransaction =()=>{
    props.addTransaction({amount: Number(amount), desc, type, id:Date.now})
    props.setIsAddVisible()
  }
  
  return (
    <div className="add-transaction--view">
      <input 
        placeholder="Amount" 
        type="number"
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
      />
      <input 
        placeholder="Description" 
        value={desc} 
        onChange={(e) => setDesc(e.target.value)}
         />
      <div className="radio--box">
        <input 
          type="radio" 
          id="expense" 
          name="type" 
          value="Expense" 
          checked={type==="Expense"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input 
         type="radio" 
         id="income"
         name="type" 
         value="Income"
         checked={type==="Income"}
         onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button onClick={addTransaction} className="add--btn">Add Transaction</button>
    </div>
  );
}
 
export default AddTransactionView;