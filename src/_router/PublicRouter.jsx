import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
//import Error from "../pages/Error";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
