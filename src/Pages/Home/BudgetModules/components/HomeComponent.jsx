/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../componentStyles/HomeComponent.css"
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./Transactioncomponent";

 
const HomeComponent = () => {
  const [transactions, setTransaction] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const addTransaction = (payload)=>{
    const transactionArray= [...transactions];
    transactionArray.push(payload)
    setTransaction(transactionArray);  
        
  }
  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === "Expense" ? (exp = exp + payload.amount) : (inc = inc + payload.amount)
   })
   setExpense(exp)
   setIncome(inc)
  }

  useEffect(() =>{
    calculateBalance()
  } ,[transactions])
  return ( 
    <div className="homecomponent--container">
      <OverViewComponent addTransaction={addTransaction} expense={expense} income={income} />
      <TransactionComponent transactions={transactions} />
    </div>
  );
}
 
export default HomeComponent;