import { Route, Routes } from "react-router";
import CountriesPage from "../pages/CountriesPage";
import CountryPage from "../pages/CountryPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/country/:name" element={<CountryPage />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRouter;
