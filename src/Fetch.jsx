// import React from "react";
import Axios from "axios";
import { useState } from "react";

export default function FetchPics() {
  const [imageUrl, setImageUrl] = useState("");

  const fetchPhoto = async () => {
    const response = await Axios.get(`https://picsum.photos//200/300?`);
    setImageUrl(response.request.responseURL);
  };

  return (
    <div className="loremPics">
      <button onClick={fetchPhoto}>Button</button>
      {imageUrl ? <img src={imageUrl} alt="random pic" /> : null}
    </div>
  );
}
