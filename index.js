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
  addFaqEventListener(st);
  router.updatePageLinks();
}
render(state.Home);

function addFaqEventListener(st) {
  if (st.page === "Faqs") {
    document.querySelectorAll(".faq_question").forEach(question =>
      question.addEventListener("click", event => {
        const id = event.target.id.slice(1);
        console.log(id);
        document.querySelector(`#a${id}`).classList.toggle("hidden");
      })
    );
    console.log(document.querySelectorAll(".faq_question"));
  }
}
