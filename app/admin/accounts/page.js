"use client";

import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="home-page-flex">
        <div className="content-list padding-20">
          <h4 className="bold">Account Manager</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="mt-10">
            <table id="dash-table" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fullname</th>
                  <th scope="col">Country</th>
                  <th scope="col">Email</th>
                  <th scope="col">Join date</th>
                  <th scope="col">...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1dd839</th>
                  <td>John Doe</td>
                  <td>Nigeria</td>
                  <td>johndoe@gmail.com</td>
                  <td>20 June, 2023</td>
                  <td className="flex gap-10">
                    <Link
                      href={`accounts/id`}
                      className="btn btn-sm btn-success"
                    >
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
