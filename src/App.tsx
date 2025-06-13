import { Routes, Route } from "react-router-dom";
import { mainRoutes, authRoutes } from "./router";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {mainRoutes.map((route, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        {authRoutes.map((route, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
