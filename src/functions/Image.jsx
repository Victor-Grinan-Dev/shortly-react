import React from "react";

import boostdesk from "../images/bg-boost-desktop.svg";
import boostmob from "../images//bg-boost-mobile.svg";
import shortdesk from "../images/bg-shorten-desktop.svg";
import shortmob from "../images/bg-shorten-mobile.svg";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";
import illustration from "../images/illustration-working.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import logo from "../images/logo.svg";

const images = {
  boostdesk: boostdesk,
  boostmob: boostmob,
  shortdesk: shortdesk,
  shortmob: shortmob,
  brand: brand,
  detailed: detailed,
  customizable: customizable,
  illustration: illustration,
  facebook: facebook,
  instagram: instagram,
  pinterest: pinterest,
  twitter: twitter,
  logo: logo,
};

const Image = (props) => {
  const { name, classes } = props;
  return <img src={images[name]} className={classes} alt="selected img" />;
};

export default Image;
