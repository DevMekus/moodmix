"use client";

import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="home-page-flex">
        <div className="content-list padding-20">
          <h4 className="bold">Playlist Manager</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="col-sm-2 mt-10">
            <Link
              href="playlists/new"
              className="bt bt-success default-btn mt-10  anim-btn color-white"
            >
              New playlist
            </Link>
          </div>

          <div className="mt-10">
            <h5 className="card-title"> Playlists</h5>
            <table id="dash-table" className="table">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Playlist name</th>
                  <th scope="col">Owner Name</th>
                  <th scope="col">Plays</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Create date</th>
                  <th scope="col">...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1dd839</th>
                  <td>Epic Collection</td>
                  <td>John Doe</td>
                  <td>
                    34k <i className="fas fa-play ml-10"></i>
                  </td>
                  <td>
                    23k <i className="fas fa-star ml-10"></i>
                  </td>
                  <td>30 Jan, 2034</td>
                  <td className="flex gap-10">
                    <Link href={`music/id`} className="btn btn-sm btn-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="right-panels"></div>
      </div>
    </>
  );
};

export default Page;
