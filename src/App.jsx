import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import NovaStranica from "./pages/NovaStranica";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "sifarnici",
          children: [
            {
              path: "ulice",
              element: <h1>1111</h1>,
            },
            {
              path: "kupci",
              element: <h1>2</h1>,
            },
            {
              path: "podaci_o_firmi",
              element: <h1>3</h1>,
            },
            {
              path: "cijene",
              element: <h1>4</h1>,
            },
            {
              path: "cijene_po_profilima",
              element: <h1>5</h1>,
            },
            {
              path: "tip_kupca",
              element: <h1>6</h1>,
            },
            {
              path: "kategorije",
              element: <h1>7</h1>,
            },
            {
              path: "posebne_usluge",
              element: <h1>8</h1>,
            },
            {
              path: "servis_kupca",
              element: <h1>9</h1>,
            },
            {
              path: "grupe_duznika",
              element: <h1>10</h1>,
            },
          ],
        },
        { path: "brojila", element: <NovaStranica /> },
        { path: "uplate", element: <NovaStranica /> },
        { path: "obracun", element: <NovaStranica /> },
        { path: "fakture", element: <NovaStranica /> },
        { path: "knjizne", element: <NovaStranica /> },
        { path: "izvjestaji", element: <NovaStranica /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
