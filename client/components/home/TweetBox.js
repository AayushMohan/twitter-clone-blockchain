import { useState, useContext } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import {
  RiFileGifLine,
  RiBarChartHorizontalFill,
  RiBarChartHorizontalLine,
} from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import { client } from '../../lib/client'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const { currentAccount } = useContext(TwitterContext)

  const postTweet = (event) => {
    event.preventDefault()

    if (!tweetMessage) return

    const tweetId = `${currentAccount}_${Date.now()}`

    const tweetDoc = {
      _type: 'tweets',
      _id: 'tweetId',
      tweet: tweetMessage,
      timestamp: new Date(Date.now().toISOString()),
      author: {
        _key: tweetId,
        _type: 'reference',
        _ref: currentAccount,
      },
    }

    await client.createIfNotExists(tweetDoc)

    await client
      .patch(currentAccount)
      .setIfMissing({ tweets: [] })
      .insert('after', 'tweets[-1]', [
        {
          _key: tweetId,
          _type: 'reference',
          _ref: 'tweetId',
        },
      ]).commit

    setTweetMessage('')
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          alt="Profile Image"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalLine className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            <div className={style.iconsContainer}></div>
            <button
              type="submit"
              disabled={!tweetMessage}
              onClick={(event) => postTweet(event)}
              className={`${style.submitGeneral} ${
                tweetMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
