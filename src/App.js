import { EmployeeList } from "./components";
import { Navbar } from "./components";
import { EmployeeForm } from "./components";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/agenda" element={<EmployeeList />} />
          <Route path="/create-contact" element={<EmployeeForm />} />
          <Route path="/edit-contact/:id" element={<EmployeeForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
