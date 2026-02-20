import {
  html,
  render,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllSpots } from "./services/touristService.js";
import { SpotList } from "./components/SpotList.js";
import { SearchBar } from "./components/SearchBar.js";

// App is the main parent component
// it loads the data and passes it down to child components
function App() {
  const [spots, setSpots] = useState([]);
  // state for search and filter inputs from SearchBar
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  // load tourist spots asynchronously on first render
  useEffect(() => {
    getAllSpots().then((data) => {
      setSpots(data);
    });
  }, []);

  // filter spots based on search text, category, and city
  // runs every time spots, searchText, category, or city changes
  const filteredSpots = spots.filter((spot) => {
    return (
      spot.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (category === "" || spot.category === category) &&
      (city === "" || spot.city === city)
    );
  });

  return html`
    <div>
      <h1>Mahalee 🇯🇴</h1>
      <${SearchBar}
        searchText=${searchText}
        category=${category}
        city=${city}
        onSearchChange=${(e) => setSearchText(e.target.value)}
        onCategoryChange=${(e) => setCategory(e.target.value)}
        onCityChange=${(e) => setCity(e.target.value)}
      />
      <${SpotList} spots=${filteredSpots} />
    </div>
  `;
}

render(html`<${App} />`, document.getElementById("app"));
