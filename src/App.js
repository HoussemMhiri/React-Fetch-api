import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadBar from "./components/navBar/HeadBar";
import { useEffect, useState } from "react";
import axios from "axios";
import CardCont from "./components/cardsCont/CardCont";

const options = {
  method: "GET",
  url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
  params: {
    "nutrition-type": "cooking",
    "category[0]": "generic-foods",
    "health[0]": "alcohol-free",
  },
  headers: {
    "X-RapidAPI-Key": "19e71425bcmshc379ece11c51288p1450abjsn697e10dce706",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
  },
};

function App() {
  const [food, setFood] = useState([]);

  const [search, setSearch] = useState("");

  const handledDel = (id) => {
    setFood(food.filter((el) => el.food.foodId !== id));
  };

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setFood(response.data.hints);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFood();
  }, []);

  return (
    <div className="App">
      <HeadBar search={search} set={setSearch} />
      <CardCont
        data={food.filter((el) =>
          el.food.knownAs
            .trim()
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        )}
        del={handledDel}
      />
    </div>
  );
}

export default App;
