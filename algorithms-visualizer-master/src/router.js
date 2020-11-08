import VueRouter from "vue-router";
import App from "./App.vue";
import SortingAlgorithms from "./pages/sorting-algorithms/SortingAlgorithms";
import PathFindinAlgorithms from "./pages/path-finding-algorithms/PathFindingAlgorithms";
import HowTo from "./pages/HowTo";

const routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/",
        redirect: "/sorting-algorithms"
      },
      {
        path: "/sorting-algorithms",
        component: SortingAlgorithms
      },
      {
        path: "/pathfinding-algorithms",
        component: PathFindinAlgorithms
      },
      {
        path: "/how-to",
        component: HowTo
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
