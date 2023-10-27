/* eslint-disable react/prop-types */
import "../componentStyles/TransactionCell.css"
const TransactionCell = (props) => {
  return (
    <div className="transaction--cell">
      <div className="cell">
        <p>Description</p>
        <span>{props.payload.desc}</span>
      </div>
      <div className="cell">
        <p>Amount</p>
        <span>${props.payload.amount}</span>
      </div>
      <div className="cell">
        <p>Transactiion Type</p>
        <span>{props.payload.type}</span>
      </div>
    </div>
  );
}
 
export default TransactionCell;