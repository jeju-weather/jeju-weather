import { Layout } from 'components';
import { Home, TourList } from 'pages';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/tourlist" element={<TourList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
