import React, { Suspense} from "react";
import themeConfig from "../utils/themeConfig";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../scenes/home";
import LoaderScreen from "../components/Loader";

export default function RoutesApp() {

return (
    <BrowserRouter >
      <Suspense fallback={<LoaderScreen />}>
        <ThemeProvider theme={themeConfig}>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />} />
              {/* <Route path="*" component={NotFound} /> */}
            </Routes>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
}



