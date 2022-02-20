import React from 'react'

const Post = ({
  displayName,
  userName,
  text,
  avatar,
  timestamp,
  isProfileImageNFT,
}) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img
          src={avatar}
          alt={userName}
          className={
            isProfileImageNFT
              ? `${style.profileImage} smallHex`
              : style.profileImage
          }
        />
      </div>
    </div>
  )
}

export default Post
