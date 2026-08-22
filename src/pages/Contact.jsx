import React from "react";
import { NavLink, Outlet } from "react-router";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center overflow-hidden p-100">
        <h1 className="text-4xl text-white font-mono font-semibold">
          This is Contact.
        </h1>
        <h2 className="text-2xl text-white">
          <NavLink to={"/contact/form"}>
            <u>Click here to go to form</u>
          </NavLink>
          <Outlet />
        </h2>
      </div>
    </div>
  );
};

export default Contact;
