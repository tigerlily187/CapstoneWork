import * as views from "./views"

export default (st)=>`<div class="main">
  ${views[st.page]()}
</div>`