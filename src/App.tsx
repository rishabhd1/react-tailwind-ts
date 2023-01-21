import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="text-5xl">React Tailwind TS</div>
      <div className="flex justify-center items-center rounded-[10px] border-dashed p-10 my-10 bg-white text-black">
        <button className="text-white">Flex</button>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <span className="capitalize shadow-2xl p-5 cursor-pointer">g1</span>
        <span className="capitalize shadow-2xl p-5 cursor-pointer">g2</span>
      </div>
    </div>
  );
}

export default App;
