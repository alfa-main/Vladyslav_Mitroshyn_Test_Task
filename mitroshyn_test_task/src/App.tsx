import "./App.css";
import Button from "./components/atoms/Button/Button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Button variant="primary" size="medium">
        Bet Now
      </Button>
    </div>
  );
}

export default App;
