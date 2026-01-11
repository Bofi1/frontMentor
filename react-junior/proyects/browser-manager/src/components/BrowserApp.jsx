import NavBar from "./NavBar";
import Filter from "./Filter";

function BrowserApp() {
  return (
    <div className="p-5 w-full max-w-[1400px]">
      <NavBar />
      <div className="mt-15">
        <Filter />
      </div>
    </div>
  );
}

export default BrowserApp;
