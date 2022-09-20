import { Route, Routes } from "react-router-dom";
import BeersScreen from "./screens/beers-screen/BeersScreen";
import DetailScreen from "./screens/detail-screen/DetailScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import NewBeerScreen from "./screens/newBeer-screen/NewBeerScreen";
import RandomBeerScreen from "./screens/randomBeer-screen/RandomBeerScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="/beers" element={<BeersScreen />}/>
        <Route path="/random-beer" element={<RandomBeerScreen />} />
        <Route path="/new-beer"  element={<NewBeerScreen />}/>
        <Route path="/:id"  element={<DetailScreen/>}/>
      </Routes>

    </div>
  );
}
	

export default App;
