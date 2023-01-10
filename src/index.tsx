import { render } from "solid-js/web";
import { HopeThemeConfig, HopeProvider } from "@hope-ui/solid";
import App from "./App";
// import {lazy} from "solid-js";
// const App = lazy(() => import("./App"));

const config: HopeThemeConfig = {
  lightTheme: {
    colors: {
      primary9: "salmon"
    }
  }
};

render(
  () => (
    <HopeProvider config={config}>
      <App />
    </HopeProvider>
  ),
  document.getElementById("app") as HTMLElement
);
