import React from "react";

interface Props {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavButon({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive && "bg-[#036756]"
      } text-white py-2 px-4 rounded hover:bg-[#036756] font-bold`}
    >
      {title}
    </button>
  );
}

export default NavButon;
