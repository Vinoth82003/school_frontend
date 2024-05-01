import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Section from "./Components/Section";
export const AppContext = createContext();

function App() {
  const [isSidebar, setSidebar] = useState(false);
  const [activeBar, setactiveBar] = useState("dashboard");
  const [currentPath, setCurrentPath] = useState(["dashboard"]);
  const value = {
    isSidebar,
    setSidebar,
    currentPath,
    setCurrentPath,
    activeBar,
    setactiveBar,
  };
  console.log(currentPath);
  return (
    <>
      <AppContext.Provider value={value}>
        <Navbar />
        <SideBar />
        <Section />
      </AppContext.Provider>
    </>
  );
}

export default App;
