import React from 'react'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Aayush',
    userName: '0x9740D80A3bdFF2bE7f6308B5f49C42D711a8d531',
    avatar: 'https://avatars.githubusercontent.com/u/66319691?v=4',
    text: 'GM',
    isProfileImageNFT: false,
    timeStamp: '2022-02-01T12:00:00.000Z', // This is how Sanity stores timestamp
  },
  {
    displayName: 'Aayush',
    userName: '0x9740D80A3bdFF2bE7f6308B5f49C42D711a8d531',
    avatar: 'https://avatars.githubusercontent.com/u/66319691?v=4',
    text: 'GM',
    isProfileImageNFT: false,
    timeStamp: '2022-01-01T12:00:00.000Z', // This is how Sanity stores timestamp
  },
  {
    displayName: 'Aayush',
    userName: '0x9740D80A3bdFF2bE7f6308B5f49C42D711a8d531',
    avatar: 'https://avatars.githubusercontent.com/u/66319691?v=4',
    text: 'GM',
    isProfileImageNFT: false,
    timeStamp: '2021-10-01T12:00:00.000Z', // This is how Sanity stores timestamp
  },
  {
    displayName: 'Aayush',
    userName: '0x9740D80A3bdFF2bE7f6308B5f49C42D711a8d531',
    avatar: 'https://avatars.githubusercontent.com/u/66319691?v=4',
    text: 'GM',
    isProfileImageNFT: false,
    timeStamp: '2021-11-01T12:00:00.000Z', // This is how Sanity stores timestamp
  },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post />
      ))}
    </div>
  )
}

export default ProfileTweets
