import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi"; 
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    //console.log("user trying to LogOut");
    logOut()
      .then(() => {
        //alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-white shadow rounded-xl px-4 py-3 border-y-2 border-green-500 ">
      {/* <nav className="bg-white shadow rounded-xl px-4 py-3 border-y-2 border-green-500 fixed top-0 left-0 right-0 z-50"> */}

      <div className="flex justify-between items-center">
        {/* Logo */}
        
        <NavLink to="/" ><h1 className="text-2xl font-bold text-green-600">Plant Care</h1></NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5 text-accent">
          <NavLink to="/" className="hover:text-primary">Home</NavLink>
          <NavLink to="/allplants" className="hover:text-primary">All Plants</NavLink>
          <NavLink to="/addplant" className="hover:text-primary">Add Plant</NavLink>
          <NavLink to="/myplants" className="hover:text-primary">My Plants</NavLink>
        </div>

        {/* User Info + Auth (Desktop) */}
        <div className="hidden md:flex gap-5 items-center">
          <div>{user && user.displayName}</div>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user ? user.photoURL : userIcon}
            alt="user"
          />
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary  px-6 bg-green-600 text-white border-none">
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary round px-6 bg-green-600 text-white border-none">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden text-accent">
          <NavLink to="/" className="hover:text-primary">Home</NavLink>
          <NavLink to="/allplants" className="hover:text-primary">All Plants</NavLink>
          <NavLink to="/addplant" className="hover:text-primary">Add Plant</NavLink>
          <NavLink to="/myplants" className="hover:text-primary">My Plants</NavLink>


          <div className="flex flex-col gap-3 mt-3">
            <div>{user && user.email}</div>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user ? user.photoURL : userIcon}
              alt="user"
            />
            {user ? (
              <button
                onClick={() => {
                  handleLogOut();
                  setIsOpen(false);
                }}
                className="btn btn-primary w-full"
              >
                LogOut
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
