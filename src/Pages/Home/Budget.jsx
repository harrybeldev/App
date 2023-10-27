import { useState,useEffect } from "react";
import "./Budget.css"
const Budget = () => {
   const [transactions, setTransactions] = useState([]);
   const [description, setDescription] = useState('');
   const [amount, setAmount] = useState('');
   const [type, setType] = useState('Income');
   const [balance, setBalance] = useState(0);
   const [outflow, setOutflow] = useState(0);
   const [inflow, setInflow] = useState(0);
   const [error, setError] = useState(false);

  
  
  
   useEffect(() => {
      const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
      if (storedTransactions) {
        setTransactions(storedTransactions);
      }
  
      const storedBalance = JSON.parse(localStorage.getItem('balance'));
      if (storedBalance) {
        setBalance(storedBalance);
      }
   }, []);
  
   useEffect(() => {
      localStorage.setItem('transactions', JSON.stringify(transactions));
      localStorage.setItem('balance', JSON.stringify(balance));
   }, [transactions,balance]);
  
   
   const handleAddTransaction = (event) => {
      event.preventDefault()
       console.log(transactions)
       const newTransaction = {
         description,
         amount,
         type,
      };
      if (description === "" || amount === "" || type === "") {
        setError(true)
      }
         
         console.log(newTransaction)
         if (newTransaction.type === 'expense') {
            setOutflow(outflow + parseFloat(newTransaction.amount));
            setBalance(balance - parseFloat(newTransaction.amount));
         } else {
            setInflow(inflow + parseFloat(newTransaction.amount));
            setBalance(balance + parseFloat(newTransaction.amount));
         }

         console.log(type)

   
      setTransactions([...transactions, newTransaction]);
      setDescription('');
      setAmount('');
      
      setTimeout(()=>{
         setError(false)
      },2000)
      
   };

  return ( 
      <section className="section--container2" id="budget">
         <div className="container">
           {error && <p id="error_msg">Please enter Description, Amount and choose your Transaction Type</p>}
            <div className="title">
               <h1 className="title">
               My Budget App
               </h1>
            </div>

            <h3>New Entry</h3>
            <form id="form">
               <div className="form-control">
               <label htmlFor="text">Description</label>
               <input 
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                type="text" 
                placeholder="Enter Text..."
               />
               </div>
               <div className="form-control">
               <label htmlFor="amount">Amount:</label>
               <input 
                value={amount}
                onChange={(e) => setAmount(e.target.value)} 
                type="number" 
                placeholder="Enter Text..."
               />
               </div>
               <div>
               <label htmlFor="income-type">Transaction Type:</label>
               <select value={type} onChange={(e) => setType(e.target.value)} id="option" className="select-bar">
                  <optgroup label="Icome/Expense">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                  </optgroup>
               </select>
               </div>
               <button onClick={handleAddTransaction} className="btn">Add Transaction</button>
            </form>

            

            <div className="income-expense">
               <div className="bg-light">
               <h4>Inflow</h4>
               <p className="income" id="income">${inflow}</p>
               </div>
               <div className="bg-light">
               <h4>Outflow</h4>
               <p className="expense" id="expense">${outflow}</p>
               </div>
               <div className="bg-light">
               <h4>Balance</h4>
               <p id="balance">${balance}</p>
               </div>
            </div>
            <h3>History</h3>
            
            {transactions.map((transaction, index) => (
              <ul key={index} className="">
               <li>
               {transaction.description}
               </li>
               <li>
               ${transaction.amount}
               </li>
               <li>
               {transaction.type}
               </li>
                  
               </ul>
            ))}
         </div>
      </section>
      
   
   );
}
 
export default Budget;