import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import userImg from '../../assets/images/userImg.png';
import { Link } from 'react-router-dom'

import styles from './users.styles.module.css';

const Users = ({state, follow, unfollow, paginationClick, pages}) => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [openFoll, setOpenFoll] = React.useState(false);
  const [openUnfoll, setOpenUnfoll] = React.useState(false);

  const handleFollow = (id) => {
    setOpenFoll(true);
    follow(id);
  };
  const handleUnfollow = (id) => {
    setOpenUnfoll(true);
    unfollow(id)
  }

  const handleCloseFoll = () => {
    setOpenFoll(false);
  };

  const handleCloseUnfoll = () => {
    setOpenUnfoll(false);
  };


  return (
    <div className="Users" >

      <div className="pagination_container">
        {
          pages.map((p, index) => (
            <span
              key={index}
              className={ state.currentPage === p ? `${styles.paginationBtn, styles.selectedPage}`: `${styles.paginationBtn}` }
              onClick={() => {paginationClick(p)}}
            >
              { p }
            </span>
          ))
        }
      </div>
      
      <div className="users_container" >
        {
          state.users.map(i => (
              <div key={i.id} >
                <Link to={"/profile/" + i.id}>
                  <img src={i.photos.small !== null ? i.photos.small : userImg }  alt=""/>
                </Link>
                <div>{i.name}</div>
                <div>{i.status}</div>
                <div>{ `${i.followed}` }</div>
                <div>
                  {
                    state.auth.isAuth &&
                    ((i.name !== state.auth.data.login)
                        ?(i.followed
                            ? <div>
                              <Button disabled={state.followingInProgress === i.id} variant="contained" color="success" onClick={ () => (handleUnfollow(i.id))}>Followed</Button>
                            </div>

                            : <div>
                              <Button disabled={state.followingInProgress === i.id} variant="contained" color="error" onClick={() => (handleFollow(i.id))}>Unfollowed</Button>
                            </div>
                        )
                        : <div style={{ fontWeight: "bold" }} >it´s you!</div>
                    )
                  }
                </div>
                <br/>
              </div>

            )
          )
        }
      </div>
      
      <div className="alert_container" >
        <Snackbar open={openFoll} autoHideDuration={1300} onClose={handleCloseFoll}>
          <Alert severity="success" sx={{ width: '100%' }}>
            Now you are a subscriber of this person 😊
          </Alert>
        </Snackbar>
        <Snackbar open={openUnfoll} autoHideDuration={1300} onClose={handleCloseUnfoll}>
          <Alert severity="error" sx={{ width: '100%' }}>
            You have unsubscribed from this person 😢
          </Alert>
        </Snackbar>
      </div>

    </div>
  )
}

export default React.memo(Users);
