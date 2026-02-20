import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// SpotCard is a child of SpotList
// it receives a single spot as props and displays its details
export function SpotCard({ spot }) {
    return html`
    <div class="spot-card">
        <h2>${spot.name}</h2>
        <p class="category">${spot.category}</p>
        <p class="city">${spot.city}</p>
        <p>${spot.description}</p>
        <p class="rating">Rating: ${spot.rating} / 5</p>
        <p class="hours">${spot.openHours}</p>
    </div>
    `;
}