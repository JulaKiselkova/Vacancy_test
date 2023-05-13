import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import { Layout } from "./components";
import { theme } from "./constants/styles";
import { Router } from "./routes/Router";

export default function App() {
  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}
