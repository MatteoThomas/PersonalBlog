import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { NavbarContainer } from "./Nav.style";


const Nav = () => {
  return (
    <div>
      <NavbarContainer>
        <NavLink to="/Dashboard"  
       style={({ isActive }) => ({
        color: isActive ? 'transparent' : 'aliceblue',
      })}

        >
          Web Dev
        </NavLink>
        <NavLink to="/Explore"
             style={({ isActive }) => ({
              color: isActive ? 'darkgray' : 'aliceblue',
            })}
            >
          Graphic Design 
        </NavLink>
        <NavLink to="/Account"
            style={({ isActive }) => ({
              color: isActive ? 'transparent' : 'aliceblue',
            })}
            >
          Settings
        </NavLink>
        <NavLink to="/Landing"
          style={({ isActive }) => ({
            color: isActive ? 'transparent' : 'aliceblue',
        })}
        >
          Links
        </NavLink>
      </NavbarContainer>
      <Outlet />
    </div>
  );
}

export default Nav;


