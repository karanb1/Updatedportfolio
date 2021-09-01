import React from "react";

const BlogRow = () => {
  const redirect = (link) => {
    window.location.href = link;
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        redirect(
          "https://medium.com/coox-tech/what-is-a-progressive-web-app-pwa-and-how-to-convert-your-react-native-app-into-a-pwa-using-expo-11540ff116a"
        )
      }
    >
      <h1 className="text-primary font-medium text-2xl mt-8">
        What is a PWA and and how to convert your react native app into a PWA
        using expo.
      </h1>
      <p className="text-dark-gray text-sm mt-3">
        {" "}
        ⏱ 5 min read | 👀 1.8k+ views | 🗓 June 2020
      </p>
      <p className="mt-4 text-primary text-sm">
        A progressive web app is a website that can be installed on the user
        device and can be used offline. The idea of a PWA was introduced by
        Steve Jobs in 2007 ...
      </p>
    </div>
  );
};

export default BlogRow;
