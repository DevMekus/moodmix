import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h3 className="auth-title color-grey">Login account</h3>
        <div className="form-wrapper">
          <form>
            <div className="flex gap-10">
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
              <Link className="no-decoration" href="/Oauth/reset">
                <p className="color-grey">Forgot password?</p>
              </Link>
              <div className="mt-10">
                <button
                  className="bt bt-success bt-fw anim-btn default-btn"
                  type="submit"
                >
                  Login account
                </button>
              </div>
            </div>
            <p className="text-center color-grey">
              You do not have account with us?
              <br />
              <Link className="no-decoration" href="/Oauth/signup">
                <p className="color-green">Create account</p>
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
