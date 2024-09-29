import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AboutMe from './Components/AboutMe/AboutMe';
import Resume from './Components/Resume/Resume';
import CodingProjects from './Components/CodingProjects/CodingProjects';
import MobileHome from './Components/Home/MobileHome.js'
import DesktopHome from './Components/Home/DesktopHome'
import MobileLayout from './Components/Layout/MobileLayout'
import DesktopLayout from './Components/Layout/DesktopLayout'


const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}

const Layout = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileLayout/> : <DesktopLayout/>;
}

const Home = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileHome/> : <DesktopHome/>;
}


function App() {
  return (
    <ViewportProvider>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutMe/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="CodingProjects" element={<CodingProjects/>} />
        </Route>
      </Routes>
    </ViewportProvider>
  );
}

export default App;

