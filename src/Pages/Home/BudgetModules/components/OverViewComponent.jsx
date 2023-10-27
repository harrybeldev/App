/* eslint-disable react/prop-types */
import { useState } from "react";
import "../componentStyles/OverViewComponent.css"
import AddTransactionView from "./AddTransactionView";
const OverViewComponent = (props) => {
  const [isAddvisible, setIsAddVisible] = useState(false);
  return (
    <div className="overviewcomponent--container">
      <div className="balance--box">
        Balance: ${props.income - props.expense}
        <button className="add-transaction-btn" onClick={()=>setIsAddVisible(!isAddvisible)}>{isAddvisible ? "CANCEL" : "ADD"}</button>
      </div>
      {isAddvisible && <AddTransactionView setIsAddVisible={setIsAddVisible} addTransaction={props.addTransaction} />}
      <div className="transaction--container">
        <div className="transaction">
          Expense<span className="expense">${props.expense}</span>
        </div>
        <div className="transaction">
          Income<span className="income">${props.income}</span>
        </div>
      </div>
    </div>
  );
} 
 
export default OverViewComponent