import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { StudentList } from "../Components/StudentList";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return <Routes>{/* Add all routes here */}
  <Route path="/" element={<Homepage/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/student/:id" element={
    <PrivateRoute>
<StudentList/>
    </PrivateRoute>
  }/>

  </Routes>;
};
