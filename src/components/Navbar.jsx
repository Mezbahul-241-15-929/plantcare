import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi"; 
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    

    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have successfully logged out.",
              icon: "success",
              confirmButtonColor: "#16a34a",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <nav className="bg-white shadow rounded-xl px-4 py-3 border-y-2 border-green-500 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-green-600">Plant Care</h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5 font-bold text-green-600">
          <NavLink to="/" className="hover:text-green-500">Home</NavLink>
          <NavLink to="/allplants" className="hover:text-green-500">All Plants</NavLink>
          <NavLink to="/addplant" className="hover:text-green-500">Add Plant</NavLink>
          <NavLink to="/myplants" className="hover:text-green-500">My Plants</NavLink>
        </div>

        {/* User Info + Auth (Desktop) */}
        <div className="hidden md:flex gap-5 items-center">
          <div className="text-green-600">{user && user.displayName}</div>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user ? user.photoURL : userIcon}
            alt="user"
          />
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary px-6 bg-green-600 hover:bg-green-500 text-white border-none"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary round px-6 bg-green-600 text-white border-none"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
