import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h3 className="auth-title color-grey">Create an account</h3>
        <div className="form-wrapper">
          <form>
            <div className="flex gap-10">
              <div className="auth-icon">
                <span class="material-symbols-outlined color-green">
                  person
                </span>
              </div>
              <input
                type="text"
                className="auth-form"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex gap-10 mt-10">
              <div className="auth-icon">
                <span class="material-symbols-outlined color-green">mail</span>
              </div>
              <input
                type="email"
                className="auth-form"
                placeholder="You@email.com"
                required
              />
            </div>
            <div className="flex gap-10 mt-10">
              <div className="auth-icon">
                <span class="material-symbols-outlined color-green">lock</span>
              </div>
              <input
                type="password"
                className="auth-form"
                placeholder="***********"
                required
              />
            </div>
            <div className="mt-10">
              <button
                className="bt bt-success bt-fw anim-btn default-btn"
                type="submit"
              >
                Create account
              </button>
            </div>
            <p className="text-center color-grey">
              Already have an account with us?
              <br />
              <Link className="no-decoration" href="/Oauth/login">
                <p className="color-green">Login account</p>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <p className="text-center color-grey">
        MoodMix: manage your favorite songs in one sync repository and stream
        anywhere
      </p>
    </div>
  );
};

export default page;
