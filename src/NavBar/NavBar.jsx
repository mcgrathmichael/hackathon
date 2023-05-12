import React, { Component, useState } from "react";
import "./NavBarStyle.css";

export default function NavBar() {
  return (
    <nav class="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <a href="#" class="menu-logo">
        <img
          className="logo-navbar"
          src="https://i.postimg.cc/632rz81x/logo-sans-ecriture-transparent-1.png"
          alt="logo"
        />
      </a>

      <div class="menu">
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
