
import { useState } from 'react';
import { updateProfileStatus } from '../../store/profile/profileAction';

const ProfileStatus = ({ status, dispatch }) => {
  const [statusText, setStatusText] = useState('')
  const [editMode, setEditMode] = useState(false);

  const toggleEditeMode = () => {
    setEditMode( res => !res)
  }
  //
  // const deactivateEditeMode = () => {
  //   setEditMode( res => false)
  //   dispatch(updateProfileStatus(statusText))
  // }

  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={toggleEditeMode} >{ statusText || "no status" }</span>
        </div>
      }
      {editMode &&
        <div>
          <input
            onBlur={toggleEditeMode}
            onChange={(e) => {
              return setStatusText(e.target.value)
            }
            }
            value={statusText}
            autoFocus={true}
            type="text"
          />
        </div>
      }
    </>
  )
}

export default ProfileStatus
