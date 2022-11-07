import { useState } from "react";
import "./App.css";
import Gallery from "./Gallery";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);

  const getPhotos = async () => {
    setLoading(true);
    setDate(new Date().toDateString());
    await fetch(
      "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((responseData) => setData(responseData.photos.photo))
      .catch((e) => {
        console.log(e.message);
      });
    setLoading(false);
  };

  const homeButtonHandler = () => {
    window.location.reload(false);
    setData([]);
  };

  return (
    <div>
      <center>
        <h1>Photo Gallery Web app</h1>
        {data.length === 0 && (<button className="btn btn-primary" onClick={getPhotos}>
          Get Photos
        </button>)}
        {data.length >= 1 && (
          <button className="btn btn-primary d-block mt-2" onClick={homeButtonHandler}>Home</button>
        )}
        {loading && <LoadingSpinner />}
        <Gallery data={data} date={date} />
      </center>
    </div>
  );
}

export default App;
