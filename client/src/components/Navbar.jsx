import { NavLink } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const springs = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
    config: { duration: "1700" },
  });

  return (
    <header className='w-full flex flex-row justify-center items-center sm:px-12 py-4 '>
      <animated.div style={{ ...springs }}>
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
      </animated.div>
    </header>
  );
};

export default Navbar;
