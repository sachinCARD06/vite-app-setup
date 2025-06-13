import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import About from "@/pages/main/About";
import Contact from "@/pages/main/Contact";
import Home from "@/pages/main/Home";
import Profile from "@/pages/main/Profile";
import Services from "@/pages/main/Services";

interface RouterProps {
  path: string;
  element: React.ReactNode;
}

export const mainRoutes: RouterProps[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
];

export const authRoutes: RouterProps[] = [
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
];
