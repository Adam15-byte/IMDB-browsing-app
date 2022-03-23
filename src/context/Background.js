import React, { useState, createContext, useEffect } from "react";

export const Background = React.createContext();

export const BackgroundProvider = ({ children }) => {
  const [imageBG, setimageBG] = useState(
    "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX256_CR0,3,256,352_AL_.jpg"
  );

  const handleChangeImage = (imageURI) => {
    setimageBG((prevState) => imageURI);
  };

  return (
    <Background.Provider
      value={{
        imageBG,
        handleChangeImage: handleChangeImage,
      }}
    >
      {children}
    </Background.Provider>
  );
};
