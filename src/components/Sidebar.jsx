import { IconHeartHandshake } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { sun } from "../assets";

const Icon = ({ styles, name, imageUrl, isActive, disabled, handleClick }) => {
  return (
    <div
      className={`h-12 w-12 rounded-lg ${isActive && isActive === name && "bg-[#2d2f32]"} flex items-center justify-center ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imageUrl} alt="name" className="h-6 w-6" />
      ) : (
        <img
          src={imageUrl}
          alt="name"
          className={`${isActive !== name && "grayscale"} h-6 w-6`}
        />
      )}
    </div>
  );
};

function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
      <Link to={"/"}>
        <div className="rounded-lg bg-[#2c2f32] p-2">
          <IconHeartHandshake size={40} color="#1ec070" />
        </div>
      </Link>

      <div className="mt-12 flex w-20 flex-1 flex-col items-center justify-between rounded-2xl bg-[#1c1c24] py-4">
        <div className="flex flex-col items-center justify-normal gap-3">
          {navlinks.map((link) => {
            return (
              <Icon
                key={link.name}
                imageUrl={link.imgUrl}
                name={link.name}
                isActive={isActive}
                handleClick={() => {
                  setIsActive(link.name);
                  navigate(link.link);
                }}
              />
            );
          })}

          <Icon styles="bg-[#1c1c24] shadow-secondary" imageUrl={sun} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
