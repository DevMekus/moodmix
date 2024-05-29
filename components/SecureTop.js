import React from "react";
import Link from "next/link";

const SecureTop = () => {
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
        <div className="top-button-flex">
          <div className="search">
            <div className="icon-wrap">
              <span class="material-symbols-outlined icon">search</span>
            </div>
            <input type="search" placeholder="Search music..." />
          </div>
          <div className="flex gap-10">
            <button className="btn btn-sm btn-danger">
              <i class="fas fa-power-off" aria-hidden="true"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecureTop;
