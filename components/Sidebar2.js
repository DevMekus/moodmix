import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-link-cont">
          <div className="link-wrap-w">
            <div className="link-wrap">
              <h5>
                <i className="fas fa-music mg-r icon"></i>
                Music
              </h5>
            </div>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <Link className="no-decoration" href="/">
                <p>
                  <i className="fas fa-users mg-r icon"></i>
                  Manage Accounts
                </p>
              </Link>
            </div>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <Link className="no-decoration" href="/">
                <p>
                  <i className="fas fa-database mg-r icon"></i>
                  Manage Music
                </p>
              </Link>
            </div>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <Link className="no-decoration" href="/browse">
                <p>
                  <i className="fas fa-upload mg-r icon"></i>
                  Upload Music
                </p>
              </Link>
            </div>
          </div>
          <div className="category">
            <p className="color-grey"> Collection</p>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <Link className="no-decoration" href="/browse">
                <p>
                  <i className="fas fa-heart mg-r icon"></i>
                  Likes
                </p>
              </Link>
            </div>
          </div>
          <div className="link-wrap-w mt-10">
            <div className="link-wrap ml-10">
              <Link className="no-decoration" href="/browse">
                <p>
                  <i className="fas fa-list mg-r icon"></i>
                  Manage Playlist
                </p>
              </Link>
            </div>
          </div>
          <div className="category">
            <p className="color-grey">Settings</p>
          </div>
          <div className="link-wrap-w mt-10">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-arrows-alt mg-r icon"></i>
                Fullscreen
              </p>
            </div>
          </div>
          <div className="link-wrap-w mt-10">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-toggle-off mg-r icon"></i>
                Dark theme
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
