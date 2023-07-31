import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conutrydata/:countryId" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
