import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileData } from '../../store/profile/profileAction'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'

import ProfileStatus from '../../components/profile-status/profile-status.component';
import PostListWithRedirect from '../../components/post-list/post-list-container.component';
import LoadingProgress from '../../components/loading-progress/loading-progerss.component';

import userImg from '../../assets/images/userImg.png';

const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.profilePage);
  const params  = useParams();

  useEffect(() => {
    if(params.userId) {
      dispatch(fetchProfileData(params.userId));
    } else dispatch(fetchProfileData(params.userId))
  }, [dispatch]);

  return (
    <div>
      <LoadingProgress state={state} />
      {
        state.currentProfile ?
        <div>
          <div>
            <img src={state.currentProfile.photos.small !== null ? state.currentProfile.photos.small : userImg }  alt=""/>
          </div>
          <div>
            <h2>{ state.currentProfile.fullName }</h2>
            <ProfileStatus dispatch={dispatch} status={state.profileStatus}/>
          </div>
          <br/>
        </div>
          : <div>no user</div>
      }
      <PostListWithRedirect/>
    </div>
  )
}

export default Profile
