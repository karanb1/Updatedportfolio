import React from "react";
import Masonry from "react-masonry-component";
import One from "../../assets/one.jpg";
import Two from "../../assets/two.jpg";
import Three from "../../assets/three.jpg";
import Four from "../../assets/four.jpg";
import Five from "../../assets/five.jpg";
import Six from "../../assets/six.jpg";
import Seven from "../../assets/seven.jpg";
import Eight from "../../assets/eight.jpg";
import Nine from "../../assets/nine.jpg";
import Ten from "../../assets/ten.jpg";
import Eleven from "../../assets/eleven.jpg";
import Twelve from "../../assets/twelve.jpg";
import Thirteenn from "../../assets/thirteen.jpg";
import Fourteen from "../../assets/fourteen.JPG";
import Fifteen from "../../assets/fifteen.jpg";
import Sixteen from "../../assets/sixteen.jpg";
import Navigator from "../../Components/Navigator";
import Footer from "../../Components/Footer";

const photos = [
  { url: One, location: "📍 Golden Gate Bridge, San Francisco" },
  { url: Fourteen, location: "📍 Three Sisters, Oregon" },
  { url: Two, location: "📍 Lombard Street, San Francisco" },
  { url: Three, location: "📍 Astoria, Oregon" },
  { url: Four, location: "📍 Golden Gate Bridge, San Francisco" },
  { url: Six, location: "📍 Creater Lake, Oregon" },
  { url: Nine, location: "📍 Jammu, India" },
  { url: Sixteen, location: "📍 Pacific City, Oregon" },
  { url: Seven, location: "📍 Austin, Texas" },
  { url: Eight, location: "📍 Centre Island, Toronto" },
  { url: Twelve, location: "📍 Niagara Falls, Canada" },
  { url: Eleven, location: "📍 Notre-Dame Basilica, Montreal" },
  { url: Thirteenn, location: "📍 Coos Bay, Pacific coast" },
  { url: Ten, location: "📍 Centre Island, Toronto" },
  { url: Five, location: "📍 Seattle, Washington" },
  { url: Fifteen, location: "📍 Cape Kiwanda, Oregon" },
];

const masonryOptions = {
  fitWidth: true,
  columnWidth: 300,
  gutter: 7,
  itemSelector: ".photo-item",
};

const Photography = () => {
  return (
    <>
      <Navigator />
      <div className="flex flex-col justify-center sm:mx-24 border-b border-gray-200 pb-16">
        <q className="text-center text-dark-gray text-md sm:text-3xl font-medium">
          Life isn't a matter of milestones, but of moments.
        </q>
        <p className="text-center text-dark-gray text-xs sm:text-lg">
          - Rose Kennedy
        </p>
        <Masonry
          className={"photo-list"}
          elementType={"div"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {photos.map((photo) => (
            <li className="flex shadow-lg mt-4 photo-item flex-col">
              <img src={photo.url} alt="" />
              <p className="py-4 px-3 text-sm text-primary">{photo.location}</p>
            </li>
          ))}
        </Masonry>
      </div>
      <Footer />
    </>
  );
};

export default Photography;
