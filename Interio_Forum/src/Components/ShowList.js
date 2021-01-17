import React from "react";
import { ProfileButton } from "./ButtonsLinks";

function ShowList({ id, Name, avatar_url, Rating }) {
  //   console.log("this is from showlist", id, login, avatar_url);
  return (
    <>
      <div className="card-column m-2">
        <div className="card-image-top">
          <img
            src={avatar_url}
            alt=""
            style={{ width: "210px", height: "200px" }}
          />
        </div>
        <div className="card-title">{Name}</div>
        <div className="card-subtitle">Ratings : {Rating}</div>
        <div className="card-footer">
          <ProfileButton id={id} />
        </div>
      </div>
    </>
  );
}

export default ShowList;
