import ToDo2 from "./components/ToDo";

function App() {

  return (
    <div>
      <ToDo2 title={"побегать"} done={true}/>
      <ToDo2/>
    </div>
  );
}

export default App;
