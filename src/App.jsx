import { Fragment, useState } from 'react';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Dashboard from './pages/home';
import { Navbar } from './components/header';
import { Sidebar } from './components/sidebar';
import { BlankPage } from './pages/blankpage';

function App() {

  const RouteWithlodaer = () => {
    return (
      <Fragment>
        <Outlet />
      </Fragment>
    )
  }

  const RouteWithSidebar = () => {
    return (
      <Fragment>
        <Sidebar />
          <Navbar />
        <div className='main-content'>
          <Outlet />
        </div>
      </Fragment>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RouteWithSidebar />}>
          <Route index element={<Dashboard />} />
          <Route path='/accounts' element={<BlankPage />} />
          <Route path='/payroll' element={<BlankPage />} />
          <Route path='/reports' element={<BlankPage />} />
          <Route path='/advisor' element={<BlankPage />} />
          <Route path='/contacts' element={<BlankPage />} />
        </Route>
      </Route>
    )
  )

  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
