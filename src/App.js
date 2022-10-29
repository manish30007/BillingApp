
import './App.css';
import BillList from './container/BillList';
import Navbar from './container/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryBill from './container/CategoryBill';
import Baarchart from './container/Baarchart';
function App() {
  return (
 
      <Router>
      <Navbar/>
      <div className="container">
      <Switch>
      <Route exact path="/"><BillList key="0"/></Route>
      <Route exact path="/Barchart"><Baarchart key="barchart"/></Route>
      <Route exact path="/FoodNDining"><CategoryBill key="1" category="FoodNDining"/></Route>
      <Route exact path="/utility"><CategoryBill key="2"category="utility"/></Route>
      <Route exact path="/shopping"><CategoryBill key="3"category="shopping"/></Route>
      <Route exact path="/education"><CategoryBill key="4"category="education"/></Route>
      <Route exact path="/Travel"><CategoryBill key="5"category="Travel"/></Route>
      <Route exact path="/Personal Care"><CategoryBill key="6"category="Personal Care"/></Route>

      
      </Switch>
      </div>
      </Router>
  );
}

export default App;
