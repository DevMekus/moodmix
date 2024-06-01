import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="content-list padding-20 account-data">
        <h4 className="bold">John Doe</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
        <div className="mt-10">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bio Data</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <div className="row">
                <div className="col-sm-5">
                  <h4 className="color-white">Profile Information</h4>

                  <div className="mt-15">
                    <div className="flex gap-10 align-center">
                      <div className="profile-photo"></div>
                      <p className="color-grey">Profile image</p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">
                        <i className="fas fa-key icon color-red"></i>
                        Userid Id
                      </h5>
                      <p className="color-white">
                        <i className="fas fa-check-circle icon color-green"></i>
                        6376GHG362719
                      </p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">
                        <i className="fas fa-car icon color-red"></i>
                        Fullname
                      </h5>
                      <p className="color-white">
                        <i
                          className="fas fa-check-circle icon color-green pointer"
                          title="Information verified"
                        ></i>
                        Nnaji Nnaemeka Emmanuel
                      </p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">Address</h5>
                      <p className="color-white">22 Onungene Street</p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">City</h5>
                      <p className="color-white">Abakpa, Enugu East LGA</p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">State / County</h5>
                      <p className="color-white">Enugu State</p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">Country</h5>
                      <p className="color-white">NIGERIA</p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">Email address</h5>
                      <p className="color-white text-link">
                        emma@yahoo.com <i className="fas fa-envelope icon"></i>
                      </p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">Phone number</h5>
                      <p className="color-white"> 0387484383837</p>
                    </div>
                    <div className="flexItem">
                      <h5 className="color-grey">Join Date</h5>
                      <p className="color-white"> 22 June, 2023</p>
                    </div>
                    <h5 className="color-white">Brief Note</h5>
                    <p className="color-grey">
                      One of the functions of 10over10 Cars is to protect the
                      properties of citizens. One of the functions of 10over10
                      Cars is to protect the properties of citizens.
                    </p>
                  </div>
                </div>
                <div className="col-sm-7 theft-manager">
                  <h4 className="color-white">Administrator review</h4>
                  <div className="hr yellow_hr"></div>
                  <p className="color-grey mt-10">
                    One of the functions of 10over10 Cars is to protect the
                    properties of citizens. One of the functions of 10over10
                    Cars is to protect the properties of citizens.
                  </p>
                  <div className="flexItem">
                    <p className="color-white">
                      <i
                        className="fas fa-check-circle icon color-green pointer"
                        title="Information verified"
                      ></i>
                      User documented
                    </p>
                  </div>
                  <div className="flexItem">
                    <p className="color-white">
                      <i
                        className="fas fa-check-circle icon color-green pointer"
                        title="Information verified"
                      ></i>
                      User verified
                    </p>
                  </div>
                  <p className="color-grey">More actions for the user</p>
                  <div className="mt-10">
                    <p className="text-link">
                      Start a support ticket{" "}
                      <i className="fas fa-envelope icon"></i>
                    </p>
                    <div className="form-group">
                      <label className="text-link">
                        Update status <i className="fas fa-check icon"></i>
                      </label>
                      <div className="input-wrapper col-sm-3">
                        <select className="f-control">
                          <option>Verified</option>
                          <option>Unverified</option>
                          <option>Blacklisted</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 f-width">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Playlist</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <div className="mt-10">
                <table id="dash-table" className="table">
                  <thead>
                    <tr>
                      <th scope="col">AlbumId</th>
                      <th scope="col">Album name</th>
                      <th scope="col">Total songs</th>
                      <th scope="col">Create Date</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1dd839</th>
                      <td scope="row">Heavens Gate</td>

                      <td>
                        31k <i className="fas fa-music color-red ml-1s0"></i>
                      </td>
                      <td>20 June, 2023</td>
                      <td className="flex gap-10">
                        <button className="btn btn-sm">
                          <i className="fas fa-times color-red"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Favorites</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <div className="mt-10">
                <table id="dash-table" className="table">
                  <thead>
                    <tr>
                      <th scope="col">Music Id</th>
                      <th scope="col">Album name</th>
                      <th scope="col">Music name</th>
                      <th scope="col">Total likes</th>
                      <th scope="col">Like Date</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1dd839</th>
                      <td scope="row">John Doe</td>
                      <td>
                        Nigeria{" "}
                        <i className="fas fa-music color-green ml-10"></i>
                      </td>
                      <td>
                        31k <i className="fas fa-heart color-red ml-1s0"></i>
                      </td>
                      <td>20 June, 2023</td>
                      <td className="flex gap-10">
                        <button className="btn btn-sm btn-danger">
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
