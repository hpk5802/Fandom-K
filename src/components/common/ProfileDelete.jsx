import React from 'react'
import ProfileBadge from './ProfileBadge'
import classes from 'utils/classes'
import parseImg from 'utils/images'

function ProfileDelete({ id, img, size, onClick, ...props }) {
  const handleCardDelete = id => () => {
    onClick(id)
  }

  return (
    <ProfileBadge id={id} img={img} size={size}>
      <div className={classes('profile-delete', size)} onClick={handleCardDelete(id)} {...props}>
        <img className={classes('profile-delete-img', size)} src={parseImg('ic_cancel.svg')} alt='selected' />
      </div>
    </ProfileBadge>
  )
}

export default ProfileDelete
