import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// SearchBar is a child of App
// it gives users inputs to search and filter tourist spots
// props received: searchText, category, city, and event handlers from App
export function SearchBar({
  searchText,
  category,
  city,
  onSearchChange,
  onCategoryChange,
  onCityChange,
}) {
  // renders 3 user input elements for filtering the spot list
  return html`
    <div class="search-bar">
      <!-- Text input to search spots by name -->
      <input
        type="text"
        placeholder="Search by name..."
        value=${searchText}
        onInput=${onSearchChange}
      />

      <!-- Dropdown to filter by category (e.g. Nature, Museum) -->
      <select value=${category} onChange=${onCategoryChange}>
        <option value="">All Categories</option>
        <option value="Historical Site">Historical Site</option>
        <option value="Nature">Nature</option>
        <option value="Cultural">Cultural</option>
        <option value="Museum">Museum</option>
      </select>

      <!-- Dropdown to filter by city -->
      <!-- future work: dynamically generate city options from the data -->
      <select value=${city} onChange=${onCityChange}>
        <option value="">All Cities</option>
        <option value="Amman">Amman</option>
        <option value="Aqaba">Aqaba</option>
        <option value="Jerash">Jerash</option>
        <option value="Ajloun">Ajloun</option>
        <option value="Ma'an">Ma'an</option>
        <option value="Balqa">Balqa</option>
      </select>
    </div>
  `;
}
