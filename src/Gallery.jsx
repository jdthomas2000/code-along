import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  data,
  useLocation,
} from "react-router-dom";

const Gallery = ({ query }) => {
  const [images, setImages] = useState(null);
  const apiKey = "oQlOCXPVR3uFW8QHZ9eCQEw5ynlZFeszLatPHGRPttJlnYgOsQfNilnm";

  useEffect(() => {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=5`;
    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [query]);

  if (!images) return <h1>No Images for this country oh noooo</h1>;

  return (
    <>
      <div className="gallery-container">
        {images.photos.map((photo) => {
          return (
            <div className="country-image-container">
              <img src={photo.src.original} alt={photo.alt}></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
