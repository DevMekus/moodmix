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
          <div className="mt-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">New Playlist</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </p>

                <form>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Playlist name</label>
                      <input
                        type="text"
                        placeholder="Ex: Epic Collections"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group mt-10">
                      <label>Associative mood</label>
                      <select className="form-control">
                        <option>Happy</option>
                        <option>Exciting</option>
                        <option>Adventurous</option>
                        <option>Sad</option>
                        <option>Epic</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-10">
                    <div className="form-group">
                      <label>Brief note</label>
                      <textarea
                        rows={5}
                        className="form-control"
                        type="text"
                        placeholder="Write about this playlist"
                      />
                    </div>
                  </div>
                  <button className="bt bt-success color-white mt-10">
                    Save playlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
