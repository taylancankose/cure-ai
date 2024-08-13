import React, { useCallback, useState } from "react";
import { menu, search } from "../assets";
import CustomButton from "./CustomButton";
import { usePrivy } from "@privy-io/react-auth";
import { IconHeartHandshake } from "@tabler/icons-react";
import { navlinks } from "../constants";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { ready, authenticated, login, user, logout } = usePrivy();
  const navigate = useNavigate();
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");

  const handleAuth = useCallback(async () => {
    if (authenticated) {
      await logout();
    } else {
      try {
        const res = await login();
        if (user) {
          console.log(user);
          // fetch user
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [authenticated, login, logout, user]);
  return (
    <div className="mb-8 flex flex-col-reverse justify-between gap-6 md:flex-row">
      {/* Search bar  */}
      <div className="flex h-12 max-w-[458px] flex-row rounded-[100px] bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1">
        <input
          type="text"
          placeholder="Search for records..."
          className="flex w-full bg-transparent font-epilogue text-sm font-normal text-[#959fb8] outline-none placeholder:text-[#959fb8]"
        />
        <div className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#4acd8d]">
          <img src={search} alt="search" className="h-4 w-4 object-contain" />
        </div>
      </div>

      <div className="hidden flex-row justify-end gap-2 sm:flex">
        <CustomButton
          title={authenticated ? "Logout" : "Login"}
          styles={authenticated ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={handleAuth}
        />
      </div>

      <div className="relative flex items-center justify-between sm:hidden">
        <div className="flex h-[40px] cursor-pointer justify-center rounded-[10px] bg-[#2c2f32]">
          <IconHeartHandshake size={40} color="#1ec070" className="p-2" />
        </div>
        <img
          src={menu}
          alt="menu"
          className="h-8 w-8 cursor-pointer object-contain"
          onClick={() => {
            setToggleHamburger(!toggleHamburger);
          }}
        />

        <div
          className={`absolute left-0 right-0 top-[60px] z-10 bg-[#1c1c24] py-4 shadow-secondary ${!toggleHamburger ? "-translate-y-[100vh]" : "translate-y-0"} transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex cursor-pointer p-4 text-[#b2b2c1] ${isActive === link.name && "bg-[#30304c]"}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleHamburger(false);
                  navigate(link.link);
                }}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
