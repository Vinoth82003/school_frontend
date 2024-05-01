import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Section from "./Components/Section";
export const AppContext = createContext();

function App() {
  const [isSidebar, setSidebar] = useState(false);
  const value = { isSidebar, setSidebar };
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
