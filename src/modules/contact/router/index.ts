import ContactView from "../views/contact.views.vue";

import { RouteConfig } from "vue-router";

export default [
  {
    path: "contact",
    name: "Contact",
    component: ContactView
  } as RouteConfig
];
