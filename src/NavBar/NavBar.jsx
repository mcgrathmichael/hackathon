import "./NavBarStyle.css";
import Link from "@mui/material/Link";
import FetchPics from "../Fetch";
import React, { Component, useState } from "react";
import "./NavBarStyle.css";

export default function NavBar() {
  return (
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>
      <a href="#" className="menu-logo">
        <img
          className="logo-navbar"
          src="https://i.postimg.cc/632rz81x/logo-sans-ecriture-transparent-1.png"
          alt="logo"
        />
      </a>
      <div className="menu">
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" element={<FetchPics />}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
