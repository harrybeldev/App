import "./index.css"
import HomeComponent from "./components/HomeComponent.jsx";
const BudgetApp = () => {
  return ( 
   <section className="budget--container" id="budgetapp">
      <div className="header">Budget App</div>
      <HomeComponent />
   </section>
  );
}
 
export default BudgetApp;