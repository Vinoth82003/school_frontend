import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Section from "./Components/Section";
// creating context which will store the command datas which are stored and accesing in all other components
export const AppContext = createContext();
// main app function which is used to render all other components
function App() {
  const [isSidebar, setSidebar] = useState(true);
  const [isAdmin, setAdmin] = useState(true);
  const [isStudent, setStudent] = useState(false);
  const [isTeacher, setTeacher] = useState(false);
  const [isParent, setParent] = useState(false);
  const [currentClick, setCurrentClick] = useState(["dashboard"]);
  const [activeBar, setactiveBar] = useState("dashboard");
  const [currentPath, setCurrentPath] = useState(["dashboard"]);
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
