import { Layout } from 'components';
import { TourList } from 'components/TourList';
import { Home, TourCity, Hallasan } from 'pages';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/tourcity" element={<TourCity />} />
          <Route path="/tourcity/:location" element={<TourList />} />
          <Route path="/hallasan" element={<Hallasan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
