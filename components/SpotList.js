import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { SpotCard } from "./SpotCard.js";

// SpotList is a child of App
// it receives spots as props and renders a SpotCard for each one
export function SpotList({ spots }) {
  return html`
    <div class="spot-list">
      ${spots.map(
        (spot) => html` <${SpotCard} key=${spot.id} spot=${spot} /> `
      )}
    </div>
  `;
}
