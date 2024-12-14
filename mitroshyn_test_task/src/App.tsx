import "./App.css";
import { CasinoCard } from "./components/organisms/CasinoCard/CasinoCard";
import { MOCK_CASINOS_DATA } from "./data/casinosData";
import Container from "./layout/Container";

function App() {
  return (
    <Container>
      <div className="flex flex-col gap-12-px">
        <div className="body-md font-semibold text-gray">Best Casinos 2024</div>
      <div className="flex flex-col gap-12-px">
        {MOCK_CASINOS_DATA.map((item) => (
          <CasinoCard data={item} />
        ))}
      </div>
      </div>
    </Container>
  );
}

export default App;
