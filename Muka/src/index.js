import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider } from 'react-router-dom';
import { router } from './route/route';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const store=setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <RouterProvider router={router}/>
   </Provider>
   
);
