"use client";

import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="home-page-flex">
        <div className="content-list padding-20">
          <h4 className="bold">Music Manager</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="col-sm-2">
            <Link
              href="music/new"
              className="bt bt-success default-btn mt-10  anim-btn color-white"
            >
              Add Music
            </Link>
          </div>
          <div className="mt-10">
            <table id="dash-table" className="table">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Album</th>
                  <th scope="col">Music Name</th>
                  <th scope="col">Plays</th>
                  <th scope="col">Downloads</th>
                  <th scope="col">Upload date</th>
                  <th scope="col">...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1dd839</th>
                  <td>John Doe</td>
                  <td>Nigeria gain</td>
                  <td>
                    34k <i className="fas fa-play ml-10"></i>
                  </td>
                  <td>
                    23k <i className="fas fa-download ml-10"></i>
                  </td>
                  <td>30 Jan, 2034</td>
                  <td className="flex gap-10">
                    <Link href={`music/id`} className="btn btn-sm btn-success">
                      <i className="fas fa-eye"></i>
                    </Link>

                    <button className="btn btn-sm btn-danger">
                      <i className="fas fa-times"></i>
                    </button>
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
