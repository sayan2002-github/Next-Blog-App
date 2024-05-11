"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "rgb(8, 0, 66)" }}
      data-bs-theme="dark"
    >
      <div className="container container-fluid">
        <Link className={`navbar-brand ${styles.navbarHead}`} href="/">
          blog.com
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${pathName == "/" && "active"}`} href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathName == "/about" && "active"}`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathName == "/contact" && "active"}`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathName == "/blogs" && "active"}`}
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathName == "/admin" && "active"}`}
                href="/admin"
              >
                Admin
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {!isLoggedin ? (
              <>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => setIsLoggedin(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <span
                  className={`nav-link ${styles.user}`}
                  onClick={() => setIsLoggedin(false)}
                  style={{ cursor: "pointer" }}
                >
                  <FaUserCircle className={styles.userProfile} />{" "}
                  <span>Sayan Parui</span>
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
