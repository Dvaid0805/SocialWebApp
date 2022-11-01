import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from '../../store/profile/profileAction';
import LoadingProgress from '../../components/loading-progress/loading-progerss.component';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'

import userImg from '../../assets/images/userImg.png';

const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.profilePage);
  const params  = useParams();

  useEffect(() => {
    if(params.userId) {
      dispatch(setUserProfile(params.userId));
    } else dispatch(setUserProfile(2))
  }, [dispatch]);

  return (
    <div>
      <LoadingProgress state={state} />
      {
        state.currentUser ?
        <div>
          <div>
            <img src={state.currentUser.photos.small !== null ? state.currentUser.photos.small : userImg }  alt=""/>
          </div>
          <div>
            <h2>{ state.currentUser.fullName }</h2>
            <p>{ state.currentUser.aboutMe }</p>
          </div>
        </div>
          : <div>no user</div>
      }
    </div>
  )
}

export default Profile
