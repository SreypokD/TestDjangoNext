"use client";
import React from "react";
import Link from "next/link";
const MenuBar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href={'/dashboard'} >Dashboard</Link >
            </li>
            <li>
              <Link href={'/today'} >Today</Link >
            </li>
            <li>
              <Link href={'/'}>Todu action</Link >
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
