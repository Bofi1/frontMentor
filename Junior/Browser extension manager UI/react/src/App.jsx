import Filters from "./components/Filters";
import Header from "./components/Header";
import Main from "./components/Main";
import RenderElements from "./components/RenderElements";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Main>
        <RenderElements />
      </Main>
    </>
  );
}

export default App;
