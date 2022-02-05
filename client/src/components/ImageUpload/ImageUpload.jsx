import React, { useState } from "react";
import "./ImageUpload.css";
import noImg from "./noImage.png"

const ImageUpload = () => {
  const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");
  const [img, setImg] = useState("");
  const [render, setRender] = useState("");
  
  const uploadImage = () => {
    setRender("true")
    console.log(render);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gallery");
    data.append("cloud_name", "proj3");
    fetch("  https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
  
      .catch((err) => console.log(err));
    
  };

  const imagePreview = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setImage(file);
    reader.onloadend = () => {
      setImg({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
    console.log(file);
  };


  return (
    <div>
      <div className="imageUpload">
        <h1>Upload</h1>
        <input type="file" onChange={(e) => imagePreview(e)}></input>
        {img.imagePreviewUrl ? <img className="image"src={img.imagePreviewUrl} /> : <h1></h1>
        }
        <button className="uploadBtn" onClick={uploadImage}>Upload</button>
      </div>
      <div>
      </div>
    </div>
  );
};
export default ImageUpload;
