import React from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav
        className={` ${style.navModulated}  navbar navbar-expand-sm  navbar-dark fixed-top`}
      >
        <div className="d-flex justify-content-center">
          <a className={`${style.smScreenLink} ${style.verticalAllign} navbar-brand`} href="#">
            Newsbuzz
          </a>

          <form
            className={`${style.smScreenForm} ${style.verticalAllign} ${style.hide} form-inline my-2 my-lg-0`}
          >
           
            <input
              className={`${style.searchIn}  form-control mr-sm-2`}
              type="search"
              placeholder="&#xF002; Search Player or League" 
              style={{fontFamily:"Arial, FontAwesome"}}
              aria-label="Search"
            ></input>
          </form>

          <i class={` ${style.smScreenSpan} ${style.verticalAllign} fas fa-bars`}></i>
         

          <button className={`btn ${style.loginBtn} ${style.verticalAllign} `}>LOGIN</button>
          <button className={`btn ${style.RegisterBtn} ${style.verticalAllign} `}>REGISTER</button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </nav>
    </>
  );
};

export default Navbar;
