import React, { Component, useState } from "react";
// import React, { useState, useEffect } from "react";
import "./NavBarStyle.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="liste">
        <li className="items">Home</li>
        <li className="items">Contact</li>
      </ul>
      <button className="button-navbar">BTN</button>
    </nav>
  );
}
