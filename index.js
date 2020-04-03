import * as state from "./store";
import { Header, Main, Nav } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";
const router = new Navigo(window.location.origin);

router.on({
  "/": () => render(state.Home),
  ":page": params => {
    let page = capitalize(params.page);
    console.log(page);
    render(state[page]);
  }
});

function render(st) {
    console.log(st);
  document.querySelector(".root").innerHTML = `
    ${Header(st)}
    ${Nav()}
    ${Main(st)}
    `;
    router.updatePageLinks();
}
render(state.Home);
