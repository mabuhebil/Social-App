import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/AppRouts";
import AuthProvider from "./componets/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
