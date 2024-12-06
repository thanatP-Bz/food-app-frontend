import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layout";
import Homepage from "./pages/Homepage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layouts>
            <Homepage />
          </Layouts>
        }
      />
      <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
