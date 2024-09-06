import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import JobPostCreate from "../Pages/JobPostCreate";
import MyJobs from "../Pages/MyJobs";
import Login from "../Pages/Login";
import Salary from "../Sidebar/Salary";
import SalaryPage from "../Pages/SalaryPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/",
         element: <Home />},
         { path: "/post-job",
          element:<JobPostCreate/>  
         },
         
         { path: "/my-job",
          element:<MyJobs/>  
         },
         { path: "/salary",
          element:<SalaryPage/>  
         },

      ],

    },
    {
      path: "/login",
      element: <Login/>
    },
   
    
    
  ]);

  export default router;