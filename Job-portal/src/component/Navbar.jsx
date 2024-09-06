
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import React, { useState }from 'react'




  const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  const navitems = [
    { path: "/", title: "Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary" },
    { path: "/post-job", title: "Post Job" },
  ];

  return (
    <header>
      <nav className="p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
          <a href='/' className="text-6xl font-bold">Job Portal</a>
          <ul className="hidden gap-12 md:flex">
            {navitems.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  to={path}
                 
                  className={({ isActive }) => isActive ? "active text-yellow-500" : "text-white"}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='hidden space-x-6 text-base font-medium text-black lg:block'>
            <Link to="/login" className='px-5 py-2 text-white border rounded'>Log in</Link>
            <Link to="/login" className='px-5 py-2 text-white bg-blue-700 border rounded'>Sign up</Link>
            
          </div>
          <div className='block md:hidden '>
            <button onClick={handleMenuToggler}>
              {
              isMenuOpen ? <FaXmark className='w-5 h-5 text-white'/> : <FaBarsStaggered className='w-5 h-5 text-white'/>
  }
              </button>
          </div>
        </div>
      </nav>
      <div className={`px-4 py-5 text-white bg-black rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
        {navitems.map(({ path, title }) => (
              <li key={path} className='py-1 text-base text-white first:text-white'>
                <NavLink
                  to={path}
                 
className={({ isActive }) => isActive ? "active text-white" : ""}
                >                  
                  {title}
                </NavLink>
              </li>
            ))}
                       <li className='py-1 text-white'> <Link to="/login">Log in</Link></li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
