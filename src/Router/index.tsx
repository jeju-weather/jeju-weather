import { Layout } from 'components';
import { Home, TourCity, Hallasan } from 'pages';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/tourcity" element={<TourCity />} />
          <Route path="/hallasan" element={<Hallasan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
