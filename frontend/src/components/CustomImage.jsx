import React from "react";
import PropTypes from "prop-types";

const CustomImage = ({ name }) => {
  const images = {
    userIcon: {
      src: "images/svg/userr.svg",
      alt: "user",
    },
    cartIcon: {
      src: "images/svg/cart.svg",
      alt: "cart",
    },
    book2: {
      src: "images/book2.jpg",
      alt: "book2",
    },
    book10: {
      src: "images/book10.jpg",
      alt: "book10",
    },
    bookMainPage: {
      src: "images/book3.jpg",
      alt: "Bookimage8",
    },
    searchIcon: {
      src: "images/svg/search.png",
      alt: "search",
    },
    facebookIcon: {
      src: "images/svg/fb.svg",
      alt: "fb",
    },
    instaIcon: {
      src: "images/svg/insta.svg",
      alt: "insta",
    },
    Imail: {
      src: "images/svg/Imail.png",
      alt: "mail",
    },

    loginImage: {
      src: "images/login.jpeg",
      alt: "login",
    },
    tickIcon: {
      src: "images/svg/tick.svg",
      alt: "tick",
    },
    tweetIcon: {
      src: "images/svg/tweet.svg",
      alt: "tweet",
    },
    mediumIcon: {
      src: "images/svg/medium.svg",
      alt: "medium",
    },
    playIcon: {
      src: "images/svg/play.svg",
      alt: "play",
    },
    audioBook1: {
      src: "images/audioB1.jpg",
      alt: "audioB1",
    },
    indigoInsta: {
      src: "images/svg/Iinsta.svg",
      alt: "Iinsta",
    },
    indigoFB: {
      src: "images/svg/ifacebook.svg",
      alt: "ifacebook",
    },
    indigomedium: {
      src: "images/svg/Imedium.svg",
      alt: "Imedium",
    },
    indigotwitter: {
      src: "images/svg/Itwitter.svg",
      alt: "Itwitter",
    },
    editButton: {
      src: "images/svg/editButton.svg",
      alt: "editButton",
    },
    profileBackground: {
      src: "images/banner.jpg",
      alt: "banner",
    },
  };

  // Get the corresponding image data based on the 'name' prop
  const image = images[name];

  // If the 'name' is invalid or not found in the images object, you can return a default image or null
  if (!image) {
    return <p>Image not found</p>;
  }

  return <img src={image.src} alt={image.alt} />;
};

// Define the prop types to validate the 'name' prop
CustomImage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CustomImage;
