/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { ThemeProvider } from "styled-components";
import { Button, Flex, Screen, Typography } from "./style";
import { darkTheme, lightTheme } from "./style/theme";
import { NavBar } from "./components/navbar";
import { Header } from "./components/header";
import { Stories } from "./components/stories";
import { Publications } from "./components/publications";
import { getPhotos } from "./services/photo";

function App() {
  const PHOTOS_PER_PAGE = 8;

  const [theme, setTheme] = useState("dark");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE);

  const releaseLoading = () => setLoading(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handlePhotosPerPage = () => {
    setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE);
  };

  async function fetchPhotos() {
    setLoading(true);
    const data = await getPhotos(photosPerPage, releaseLoading);
    setPhotos(data);
  }

  console.log(photos);

  useEffect(() => {
    fetchPhotos();
  }, [photosPerPage]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />

        <Flex>
          <Header />
          <Stories photos={photos} />
          <Publications photos={photos} />

          {isLoading ? (
            <ReactLoading
              type="spinningBubbles"
              color={theme.textPrimary}
              height={20}
              width={20}
            />
          ) : (
            <Button onClick={handlePhotosPerPage}>
              <Typography>Ver mais</Typography>
            </Button>
          )}
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
