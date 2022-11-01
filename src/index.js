import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

import SocialWeb from './routes/social-web/social-web.component';
import Messenger from './routes/messenger/messenger.component';
import Friends from './routes/friends/friends.component';
import UsersContainer from './routes/users/users-container.component';
import Posts from './routes/posts/posts.component';
import Profile from './routes/profile/profile.component';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SocialWeb/>,
    children: [
      {
        path: '/posts',
        element: <Posts/>,
      },
      {
        path: '/messenger/*',
        element: <Messenger/>,
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
