const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "850px",
  mobileX: "813px",
  tablet: "769px",
  laptop: "1025px",
  laptopL: "1440px",
  desktop: "2560px"
};

export default {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileX: `(min-width: ${size.mobileX})`,
  maxMobile: `(max-width: ${size.mobileM})`,
  maxMobileXL: `screen and (min-width : ${size.tablet}) and (max-width : ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  maxLaptop: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
