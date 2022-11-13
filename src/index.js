import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

import SocialWeb from './routes/social-web/social-web.component';
import MessengerContainer from './routes/messenger/messenger-container.component';
import Friends from './routes/friends/friends.component';
import UsersContainer from './routes/users/users-container.component';
import Profile from './routes/profile/profile.component';
import Login from './routes/login/login.component';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SocialWeb/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/messenger/*',
        element: <MessengerContainer/>,
      },
      {
        path: '/friends',
        element: <Friends/>,
      },
      {
        path: '/users',
        element: <UsersContainer/>,
      },
      {
        path: '/profile/:userId',
        element: <Profile/>,
      },
      {
        path: '/profile',
        element: <Profile/>,
      },
    ]
  }
]);

window.store = store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
