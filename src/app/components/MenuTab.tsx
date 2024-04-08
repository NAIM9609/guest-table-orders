"use client";

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import ModalAddToCart from "./ModalAddToCart";

function GetTabMenuItems(t: string) {
    return (
        <>
            <MenuItem />
        </>
    );
}

const MenuTab = () => {
  const [selectedMenuTab, setSelectedMenuTab] = useState("");
  const menuTabs = ["Cibi", "Bevande", "Alcolici"];

  const handleOptionChange = (event: any) => {
    setSelectedMenuTab(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        {menuTabs.map((t, index) => {
            const tabClassName = !selectedMenuTab && !index ? "tab tab-active" : "tab";

          return (
            <>
              <input
                type="radio"
                name="menuTabChoice"
                className={tabClassName}
                role="tab"
                onChange={handleOptionChange}
                aria-label={t}
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-2"
              >
                {GetTabMenuItems(t)}
              </div>
            </>
          );
        })}
      </div>
      <ModalAddToCart />
    </>
  );
};

export default MenuTab;
