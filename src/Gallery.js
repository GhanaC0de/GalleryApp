import React from "react";

function Gallery({ data, date }) {
  return (
    <div className="mt-3">
      <div className="row justify-content-center">
        {data.map((photos, index) => {
          const url = `https://farm${photos.farm}.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`;
          return (
            <div className="col-4 m-2 image_container" key={index}>
              <img className="image" src={url} alt="" />
              <div className="description mt-2">
                <h4 className="title">{photos.title}</h4>
                <h5 className="date">{date}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
