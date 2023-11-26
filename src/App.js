import Login from "../src/components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./components/Items";
import Navbars from "./components/common/Navbars";
import Home from "./pages/Home";
import AddItems from "./components/AddItems";
import Suppliers from "./components/suppliers/Suppliers";
import Customer from "./components/customers/Customer";
import CustomerInvoice from "./components/customers/CustomerInvoice";
import Test from "./components/test/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="additem" element={<AddItems />} />
      <Route path="/test" element={<Test />} />
      <Route path="/home" element={<Home />}>
        <Route path="Items" element={<Items />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="customer" element={<Customer />} />
        <Route path="customerinvoice" element={<CustomerInvoice />} />
        {/* <Route path="home" element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
