import React, { useState } from 'react'
import ProfileBadge from './ProfileBadge'

function ProfileSelect({ id = 'cardID', img = 'img_idol_example.svg', size = '', onClick }) {
  const [select, setSelect] = useState(false)

  const handleCardSelect = id => () => {
    setSelect(!select)
    onClick({ key: id, value: !select })
  }

  return <ProfileBadge id={id} img={img} size={size} selected={select} onClick={handleCardSelect(id)} />
}

export default ProfileSelect
