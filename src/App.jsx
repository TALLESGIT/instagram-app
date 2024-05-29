import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { Flex, Screen } from "./style";
import { darkTheme, lightTheme } from "./style/theme";
import { NavBar } from "./components/navbar";
import { Header } from "./components/header";
import { Stories } from "./components/stories";
import { Publications } from "./components/publications";
import { getPhotos } from "./services/photo";

function App() {
  const PHOTOS_PER_PAGE = 20

  const [theme, setTheme] = useState("dark");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE)

  const releaseLoading =  () => setLoading(false)

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  async function fetchPhotos() {
    const data = await getPhotos(photosPerPage, releaseLoading );
    setPhotos(data);
  }

  console.log(photos)

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />

        <Flex>
          <Header />
          <Stories photos={photos}/>
          <Publications photos={photos} />
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
