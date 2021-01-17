import React, { useEffect, useState } from "react";
import { ConsultButton } from "./ButtonsLinks";

import ShowList from "./ShowList";

function DesignerList({ addClass }) {
  const url = "/api/designers";
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={addClass}>
        {user.map((item) => {
          return <ShowList {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default DesignerList;
