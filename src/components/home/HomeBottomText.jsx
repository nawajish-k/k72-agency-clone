import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[inter500] flex items-center justify-center gap-2">
      <div className="border-3 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] text-white hover:text-[#D3FD50]">
        <Link className="text-[6vw] font-medium leading-[5.5vw]" to='/projects'>
          Projects
        </Link>
      </div>
      <div className="border-3 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] text-white hover:text-[#D3FD50]">
        <Link className="text-[6vw] font-medium leading-[5.5vw]" to='/agence'>
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
