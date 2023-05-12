// import React, { Component, useState } from "react";
// import React, { useState, useEffect } from "react";
import "./NavBarStyle.css";
import Link from "@mui/material/Link";
// import Box from "@mui/material/Box";
import FetchPics from "../Fetch";

// export default function NavBar() {
//   return (
//     <nav>
//       <ul className="liste">
//         <Link href="/">Home</Link>
//         <Link href="/about" element={<FetchPics />}>
//           About
//         </Link>
//       </ul>
//       <button className="button-navbar">BTN</button>
//     </nav>
//   );
// }

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

// export default function Navbar() {
//   return (
//     <Box sx={{ typography: "body1" }}>

//     </Box>
//   );
// }
