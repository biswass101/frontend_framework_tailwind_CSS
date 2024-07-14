import React, { useEffect, useState } from "react";
import DropDownMenu from "./components/DropDownMenu";
import './App.css'
const App = () => {
  const [dropPos, setDropPos] = useState({});
  useEffect(() => {
    window.addEventListener('resize', () => setDropPos({}))
    document.body.addEventListener('click', () => setDropPos({}))
  }, [])
  return (
    <>
      <div className="flex justify-center items-center h-[10vh] w-full bg-red-400">
        <ul className="flex gap-24">
          <li
            onClick={(e) => {
              e.stopPropagation();
              // console.log(e);
              setDropPos({display : 'block', top : e.clientY+20, left : e.clientX-86})
            }}
            className="hover:bg-slate-900 hover:text-white cursor-pointer"
          >
            Nav1
          </li>
          <li onClick={(e) => {
              e.stopPropagation();
              console.log("Clicked Position");
              setDropPos({display : 'block', top : e.clientY+20, left : e.clientX-86})
            }}className="hover:bg-slate-900 hover:text-white cursor-pointer">
            Nav2
          </li>
          <li onClick={(e) => {
              e.stopPropagation();
              console.log("Clicked Position");
              setDropPos({display : 'block', top : e.clientY+20, left : e.clientX-86})
            }}className="hover:bg-slate-900 hover:text-white cursor-pointer">
            Nav3
          </li>
          <li onClick={(e) => {
              e.stopPropagation();
              console.log("Clicked Position");
              setDropPos({display : 'block', top : e.clientY+20, left : e.clientX-86})
            }}className="hover:bg-slate-900 hover:text-white cursor-pointer">
            Nav4
          </li>
        </ul>
      </div>
      <DropDownMenu dropPos={dropPos} setDropPos={setDropPos}/>
    </>
  );
};

export default App;
