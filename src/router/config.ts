const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: [ "/sobre"],
    exact: true,
    component: "Sobre",
  },

  {
    path: [ "/services"],
    exact: true,
    component: "Services",
  },
  {
    path: [ "/contato"],
    exact: true,
    component: "Contato",
  },
  {
    path: [ "/gerador-online-de-cutter-sanborn"],
    exact: true,
    component: "gerador-online-de-cutter-sanborn",
  },

];


export default routes;