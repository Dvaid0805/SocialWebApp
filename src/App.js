import { Routes, Route, } from 'react-router-dom'

import SocialWeb from './routes/social-web/social-web.component';
import Messenger from './routes/messenger/messenger.component';
import Friends from './routes/friends/friends.component';
import UsersContainer from './routes/users/users-container.component';
import Posts from './routes/posts/posts.component';
import Profile from './routes/profile/profile.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SocialWeb/>}>
        <Route path="posts" element={<Posts/>} />
        <Route path="messenger/*" element={<Messenger/>}/>
        <Route path="friends" element={<Friends/>} />
        <Route path="users" element={<UsersContainer/>} />
        <Route path="/profile/:userId" element={<Profile/>} />
        <Route path="/profile" element={<Profile/>} />
      </Route>
    </Routes>
  )
}

export default App
