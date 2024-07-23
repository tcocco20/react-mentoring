import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MissionPage from "./pages/MissionPage";
import BrowseSessionsPage from "./pages/BrowseSessionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <MissionPage /> },
      { path: "/browse", element: <BrowseSessionsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
