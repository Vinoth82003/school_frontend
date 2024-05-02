import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Section from "./Components/Section";
export const AppContext = createContext();

function App() {
  const [isSidebar, setSidebar] = useState(false);
  const [isAdmin, setAdmin] = useState(true);
  const [isStudent, setStudent] = useState(false);
  const [isTeacher, setTeacher] = useState(false);
  const [isParent, setParent] = useState(false);
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
  };
  console.log(currentPath);
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
