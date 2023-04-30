import React, { useState } from 'react';
import Layout from './components/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Comparatif from './pages/Comparatif';
import Source from './pages/Source';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';


function App() {
  // const [theme, setTheme] = useState('light')

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path='comparatif' element={<Comparatif />} />
      <Route path='source' element={<Source />} />
      <Route path='setting' element={<Setting />} />
      {/* <Route path='' element={}/> */}
    </Route>
  ))
  return (
    <div className={``}>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
