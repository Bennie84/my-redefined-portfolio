// import { useState } from "react";

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

// return (
//   <nav className="navbar">
//     <div className="navbar-container">
//       <div className="navbar-logo">Benniee</div>

//{
/* HAMBURGER MENU */
// }
// <button
//   className={`hamburger ${isOpen ? "active" : ""}`}
//   onClick={toggleMenu}
//   aria-label="Toggle menu"
// >
//   <span></span>
//   <span></span>
//   <span></span>
// </button>

//{
/* NAVIGATION LINKS */
//}
//{
/* <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#tools" onClick={closeMenu}>
              Tools
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar; */
//}

// import { useState, useEffect } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

// Close menu when window is resized to desktop
// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth > 768) {
//       setIsOpen(false);
//     }
//   };

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

// Close menu when clicking outside
// useEffect(() => {
//   const handleClickOutside = (e) => {
//     const navbar = document.querySelector(".navbar");
//     if (navbar && !navbar.contains(e.target)) {
//       setIsOpen(false);
//     }
//   };

//   if (isOpen) {
//     document.addEventListener("click", handleClickOutside);
//   }

//   return () => {
//     document.removeEventListener("click", handleClickOutside);
//   };
// }, [isOpen]);

// return (
//   <nav className="navbar">
//     <div className="navbar-container">
//       <div className="navbar-logo">Benniee</div>

//{
/* HAMBURGER MENU */
//}
// <button
//   className={`hamburger ${isOpen ? "active" : ""}`}
//   onClick={toggleMenu}
//   aria-label="Toggle menu"
// >
//   <span></span>
//   <span></span>
//   <span></span>
// </button>

//{
/* NAVIGATION LINKS */
//}
//         <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//           <li>
//             <a href="#hero" onClick={closeMenu}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#projects" onClick={closeMenu}>
//               Work
//             </a>
//           </li>
//           <li>
//             <a href="#tools" onClick={closeMenu}>
//               Tools
//             </a>
//           </li>
//           <li>
//             <a href="#contact" onClick={closeMenu}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const closeMenu = () => {
  //   setIsOpen(false);
  // };

  // Close menu when window is resized to desktop
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 768) {
  //       setIsOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Close menu when clicking outside navbar
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     const navbar = document.querySelector(".navbar");
  //     if (navbar && !navbar.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("click", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Benniee_Dev</div>

        {/* HAMBURGER MENU */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#tools" onClick={() => setIsOpen(false)}>
              Tools
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
