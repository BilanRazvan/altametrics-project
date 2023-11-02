import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { GrSun } from "react-icons/gr";
import { SlPrinter } from "react-icons/sl";
import { MdOutlineEdit } from "react-icons/md";
import { map } from "lodash";
import { navigationData } from "../../common/arrays";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [itemClicked, setItemClicked] = useState(-1);
  const [hidenMenu, setHidenMenu] = useState(false);
  const [path, setPath] = useState("");
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      {!hidenMenu && (
        <div
          className="navigation-wrapper"
          style={{
            backgroundColor: "rgb(240, 238, 254)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "gray",
              fontSize: "2rem",
              marginBottom: "7rem",
            }}
          >
            Menu
          </div>
          {map(navigationData, ({ name, to, expandable }, index) => (
            <div
              style={{
                backgroundColor:
                  itemClicked === index ? "rgb(113, 51, 127)" : "transparent",
                display: "flex",
                padding: "0.5rem",
                alignItems: "center",
                borderRadius: "0.5rem",
                minWidth: "14rem",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => {
                navigate(to);
                setPath(name);
                setItemClicked(index);
              }}
            >
              <div style={{ opacity: expandable ? "1 " : "0" }}>
                <IoIosArrowForward
                  size={16}
                  color={itemClicked === index ? "white" : "black"}
                />
              </div>
              <div
                style={{
                  color: itemClicked === index ? "white" : "black",
                  marginLeft: "0.5rem",
                }}
              >
                {name}
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        className="content-wrapper"
        style={{ flex: "1", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            padding: "2rem 1rem",
            borderBottomWidth: "1px",
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
          }}
        >
          <div
            style={{
              marginLeft: "2rem",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
            }}
            onClick={() => setHidenMenu((prev) => !prev)}
          >
            {hidenMenu ? (
              <AiOutlineMenuUnfold size={30} color={"black"} />
            ) : (
              <AiOutlineMenuFold size={30} color={"black"} />
            )}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "gray", marginLeft: "3rem" }}>
              {"Accounting / "}
            </div>
            <div style={{ color: "black", marginLeft: "0.3rem" }}>{path}</div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flex: "1",
              justifyContent: "end",
              marginRight: "2rem",
            }}
          >
            <FiBell size={24} color={"black"} />
            <LuSettings size={24} color={"black"} />
            <GrSun size={24} color={"black"} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "3rem 3rem 0 3rem",
            justifyContent: "end",
            gap: "1rem",
          }}
        >
          <SlPrinter size={24} color={"black"} />
          <LuSettings size={24} color={"black"} />
          <MdOutlineEdit size={24} color={"black"} />
        </div>
        {children}
      </div>
    </div>
  );
};
