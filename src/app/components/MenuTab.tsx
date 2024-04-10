"use client";

import React, { Fragment, useState } from "react";
import MenuItem, { ChildComponentProps } from "./MenuItem";
import ModalAddToCart from "./ModalAddToCart";

function GetTabMenuItems(t: ChildComponentProps) {
  return <MenuItem key={t.title + "menuItem"} title={t.title} />;
}

const MenuTab = () => {
  const [selectedMenuTab, setSelectedMenuTab] = useState("");
  const menuTabs = [
    { title: "Titolo della card" },
    { title: "Titolo della card2" },
    { title: "Titolo della card3" },
  ];

  const handleOptionChange = (event: any) => {
    setSelectedMenuTab(event.target.value);
  };

  return (
    <Fragment>
      <div role="tablist" className="tabs tabs-boxed tabs-lg">
        {menuTabs.map((t, index) => {
          const tabClassName =
            !selectedMenuTab && !index ? "tab tab-active" : "tab";

          return (
            <Fragment key={t.title}>
              <input
                key={t.title + "radio"}
                type="radio"
                name="menuTabChoice"
                className={tabClassName}
                role="tab"
                onChange={handleOptionChange}
                aria-label={t.title}
              />
              <div
                key={t.title}
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-2"
              >
                {GetTabMenuItems(t)}
              </div>
            </Fragment>
          );
        })}
      </div>
      <ModalAddToCart />
    </Fragment>
  );
};

export default MenuTab;
