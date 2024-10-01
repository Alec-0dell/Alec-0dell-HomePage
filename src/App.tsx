import { Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe.tsx';
import Resume from './Components/Resume/Resume.tsx';
import CodingProjects from './Components/CodingProjects/CodingProjects.tsx';
import DesktopHome from './Components/Home/Home.tsx';
import MobileLayout from './Components/Layout/MobileLayout.tsx';
import DesktopLayout from './Components/Layout/DesktopLayout.tsx';
import ViewportProvider, { useViewport } from './ViewPortProvider.tsx'
const Layout = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileLayout /> : <DesktopLayout />;
};

const Home = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <DesktopHome /> : <DesktopHome />;
};

function App() {
  return (
    <ViewportProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="CodingProjects" element={<CodingProjects />} />
        </Route>
      </Routes>
    </ViewportProvider>
  );
}

export default App;
