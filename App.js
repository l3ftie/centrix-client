import { AppProvider } from "./context/appContext";
import NavContainer from "./navigation/NavContainer";

export default function App() {
  return (
    <AppProvider>
      <NavContainer />
    </AppProvider>
  );
}
