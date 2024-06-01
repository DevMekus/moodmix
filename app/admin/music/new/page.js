"use client";

import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";

const Page = () => {
  return (
    <>
      <div className="home-page-flex">
        <div className="content-list padding-20">
          <h4 className="bold">Add New Music</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <form>
            <div className="mt-10">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Select Album</h5>
                  <p>
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                  <div className="mt-10">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Select from album list</label>
                          <select className="form-control">
                            <option>New Album</option>
                            <option>Album 1</option>
                            <option>Album 1</option>
                            <option>Album 1</option>
                            <option>Album 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Enter new album name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Album name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-10 align-center">
                      <div className="profile-photo mt-10">
                        <p>Artist photo</p>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Upload album banner</label>
                          <input
                            className="form-control"
                            type="file"
                            placeholder="Album name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Artist Information</h5>
                  <p>
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                  <div className="mt-10">
                    <div className="col-sm-4 mt-10">
                      <div className="form-group">
                        <label>Artist name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Album name"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 mt-10">
                      <div className="form-group">
                        <label>Artist Bio</label>
                        <textarea
                          className="form-control"
                          type="text"
                          placeholder="Write about this artist"
                        />
                      </div>
                    </div>
                    <div className="flex gap-10 align-center">
                      <div className="profile-photo mt-10">
                        <p>Artist photo</p>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Upload artist photo</label>
                          <input
                            className="form-control"
                            type="file"
                            placeholder="Album name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Music</h5>
                  <p>
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                  <div className="mt-10">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Enter music title</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Music Title"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
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
                    </div>
                    <div className="col-sm-6 mt-10">
                      <div className="form-group">
                        <label>Music Lyrics</label>
                        <textarea
                          rows={5}
                          className="form-control"
                          type="text"
                          placeholder="Write about this artist"
                        />
                      </div>
                    </div>
                    <div className="flex gap-10 align-center">
                      <div className="profile-photo mt-10">
                        <p>Upload</p>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Upload music</label>
                          <input
                            className="form-control"
                            type="file"
                            placeholder="Album name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="bt bt-success color-white mt-10">
              Save Music
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
