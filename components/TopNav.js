import React from "react";
import Link from "next/link";

const TopNav = () => {
  return (
    <>
      <div className="top-nav">
        <div className="logo-section">
          <img src="/earphone.png" className="img-fluid" alt="brand-logo" />
          <div>
            <h5>
              <span className="mood">
                M<span className="color-green">o</span>
                <span className="color-green">o</span>d
              </span>
              <span className="mix">Mix</span>
            </h5>
          </div>
        </div>
        <div className="top-button-flex flex-end">
          {/* <div className="search">
            <div className="icon-wrap">
              <span class="material-symbols-outlined icon">search</span>
            </div>
            <input type="search" placeholder="Search music..." />
          </div> */}
          <div className="flex gap-10">
            <Link
              href="/Oauth/signup"
              className="bt bt-success anim-btn default-btn"
            >
              Create account
            </Link>
            <Link
              href="/Oauth/login"
              className="bt bt-success anim-btn default-btn"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
