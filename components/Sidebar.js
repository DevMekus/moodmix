import Link from "next/link";
import React from "react";

const Sidebar = ({ links }) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-link-cont">
          {links.map((link) => (
            <div className="link-wrap-w">
              <div className="link-wrap ml-10">
                <Link className="no-decoration" href={link.url}>
                  <p>
                    <i className={`${link.icon} mg-r icon`}></i>
                    {link.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
