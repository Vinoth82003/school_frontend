import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Section from "./Components/Section";
export const AppContext = createContext();

function App() {
  const [isSidebar, setSidebar] = useState(true);
  const [isAdmin, setAdmin] = useState(true);
  const [isStudent, setStudent] = useState(false);
  const [isTeacher, setTeacher] = useState(false);
  const [isParent, setParent] = useState(false);
  const [currentClick, setCurrentClick] = useState(["notice"]);
  const [activeBar, setactiveBar] = useState("notice");
  const [currentPath, setCurrentPath] = useState(["notice"]);
  const value = {
    isSidebar,
    setSidebar,
    currentPath,
    setCurrentPath,
    activeBar,
    setactiveBar,
    isAdmin,
    setAdmin,
    isStudent,
    setStudent,
    isTeacher,
    setTeacher,
    isParent,
    setParent,
    currentClick,
    setCurrentClick,
  };
  return (
    <>
      <AppContext.Provider value={value}>
        <Navbar />
        {isAdmin && <SideBar />}
        <Section />
      </AppContext.Provider>
    </>
  );
}

export default App;
