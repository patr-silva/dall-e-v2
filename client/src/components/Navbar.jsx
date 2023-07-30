import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='w-full flex flex-row justify-end items-center sm:px-12 py-4 '>
      <NavLink
        to='/'
        className='font-medium font-mono text-white px-4 py-2'
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "underline",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/community'
        className='font-medium font-mono text-white px-4 py-2'
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "underline",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Community
      </NavLink>
      <NavLink
        to='/create-post'
        className='font-medium font-mono text-white px-4 py-2'
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "underline",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Create
      </NavLink>
    </header>
  );
};

export default Navbar;
