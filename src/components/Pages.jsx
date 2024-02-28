import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className=" w-full overflow-x-auto bg-mainBg">
      <Tabs />
      <section className="min-h-[88vh]  bg-mainBg">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
