import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/all-tasks"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        All Tasks
      </NavLink>

      <NavLink
        to="/daily"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Daily Tasks
      </NavLink>

      <NavLink
        to="/finances"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Work & Finances
      </NavLink>

      <NavLink
        to="/mind-care"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Mind-Care
      </NavLink>

      <NavLink
        to="/add-task"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add New Task
      </NavLink>
    </div>
  );
}

export default NavBar;