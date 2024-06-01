"use client";

import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";

const Page = () => {
  return (
    <>
      <div className="home-page-flex">
        <div className="content-list padding-20">
          <h4 className="bold">Favorites</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="mt-10">
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <table id="dash-table" className="table mt-10">
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
                    Nigeria <i className="fas fa-music color-green ml-10"></i>
                  </td>
                  <td>
                    31k <i className="fas fa-heart color-red ml-1s0"></i>
                  </td>
                  <td>20 June, 2023</td>
                  <td>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-times"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
