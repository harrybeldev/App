/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../componentStyles/TransactionComponent.css"
import TransactionCell from "./TransactionCell";

 

const TransactionComponent = (props) => {

  return (
    <div className="transaction--component--container">
      Transactions
      {props.transactions?.length ? props.transactions.map((payload)=> (
        <TransactionCell payload={payload} />
      )) : ""}
    </div>
  );
}
 
export default TransactionComponent;
