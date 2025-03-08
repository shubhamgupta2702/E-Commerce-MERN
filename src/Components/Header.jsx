import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search.jsx";
import Badge from '@mui/material/Badge';
import { Button } from "@mui/material";
import { VscGitCompare } from "react-icons/vsc";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { BsCart3 } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const StyledBadge =
  styled(Badge)
  (({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
function Header() {
  return (
    <>
      <div className="top-strip py-2 border-t border border-black ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-lg font-medium text-gray-500">
                Get upto 50% off new season styles, Limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="/helpCenter"
                    className="text-[14px] link font-medium transition hover:text-blue-600"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/orderTracking"
                    className="text-[14px] link font-medium transition hover:text-blue-600"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header top-strip py-4">
        <div className="container flex justify-center">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="logo.png" width={90} className="pl-0" alt="" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] pl-9 font-medium py-2">
            <Link className="hover:text-orange-500" to={"/login"}>
              Login
            </Link>{" "}
            / &nbsp;{" "}
            <Link to={"/register"} className="pr-4 hover:text-orange-500">
              Register
            </Link>
           
            <Tooltip title="Compare">
            <IconButton aria-label="cart" className=" hover:text-orange-600">
              <StyledBadge badgeContent={1} color="primary" >
              <IoIosGitCompare />
              </StyledBadge>
            </IconButton>
            </Tooltip>

            <Tooltip title="Cart">
            <IconButton aria-label="cart" className="hover:text-orange-600">
              <StyledBadge badgeContent={1} color="primary" >
              <BsCart3 />
              </StyledBadge>
            </IconButton>
            </Tooltip>
            <Tooltip title="Wishlist">
            <IconButton aria-label="cart" className="hover:text-orange-600">
              <StyledBadge badgeContent={1} color="primary" >
              <FaRegHeart />
              </StyledBadge>
            </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
