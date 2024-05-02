import Verified from "../Icon-Components/Verified";
import { LuDot } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import ReplyButton from "../Icon-Components/ReplyButton";
import LikeButton from "../Icon-Components/LikeButton";
import BookmarksButton from "../Icon-Components/BookmarksButton";
import RetweetButton from "../Icon-Components/RetweetButton";
import Statistics from "../Icon-Components/Statistics";
import ShareButton from "../Icon-Components/ShareButton";
import PropTypes from "prop-types";

export default function TweetsPosted({ tweetsData, width, getTimeElapsed }) {
  return (
    <div
      className={`${
        width < 500 ? "mt-28" : width >= 500 ? "pl-[4.25rem]" : null
      } pb-[52px] w-full text-nowrap`}
    >
      {tweetsData.map((tweet, idx) =>
        tweet.userId && tweet.tweetData ? (
          <div key={idx} className="border-b border-[#2f3336] w-full">
            <article className="px-4 w-full pt-3 pb-3 flex">
              <div className="mr-2 w-10">
                <a>
                  <img
                    className="aspect-square object-cover min-w-10 rounded-full"
                    src={tweet.tweetData.avatar}
                  />
                </a>
              </div>
              <div className="w-full">
                <div>
                  <a>
                    <div className="flex grow justify-between ">
                      <div className="flex">
                        <div className="pr-0.5 flex items-center ">
                          <span className="text-tw font-bold text-base truncate text-clip overflow-hidden max-w-24">
                            {tweet.tweetData.author}
                          </span>
                          <span className="">
                            <Verified />
                          </span>
                        </div>
                        <div className="flex items-center ">
                          <span className="text-[#71767B] text-base truncate text-clip overflow-hidden max-w-24">
                            {tweet.tweetData.username}
                          </span>
                          <span>
                            <LuDot className="text-[#71767B]" />
                          </span>
                          <span className="text-[#71767B] text-base">
                            {getTimeElapsed(tweet.tweetData.timestamp)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <span>
                          <BsThreeDots className="text-[#71767B]" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <div>
                    <span className="text-tw text-base leading-5 font-sans">
                      {tweet.tweetData.content}
                    </span>
                  </div>
                </div>
                {tweet.tweetImage && (
                  <div className="mt-3">
                    <img
                      className=" rounded-2xl aspect-auto h-full w-full"
                      src={tweet.tweetImage}
                    />
                  </div>
                )}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-1">
                    <ReplyButton />
                    <span className="text-[#71767B] text-sm">4</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RetweetButton />
                    <span className="text-[#71767B] text-sm">4</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LikeButton />
                    <span className="text-[#71767B] text-sm">77</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Statistics />
                    <span className="text-[#71767B] text-sm">5 B</span>
                  </div>
                  <BookmarksButton />
                  <ShareButton />
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div key={idx} className="border-b border-[#2f3336] w-full">
            <article className="px-4 w-full pt-3 pb-3 flex">
              <div className="mr-2 w-10">
                <a className="">
                  <img
                    className="aspect-square object-cover min-w-10 rounded-full"
                    src={tweet.avatar}
                  />
                </a>
              </div>
              <div className="w-full">
                <div>
                  <a className="w-full">
                    <div className="flex grow justify-between">
                      <div className="flex">
                        <div className="pr-0.5 flex items-center ">
                          <span className="text-tw font-bold text-base truncate text-clip overflow-hidden max-w-24">
                            {tweet.author}
                          </span>
                          <span className="">
                            <Verified />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[#71767B] text-base truncate text-clip overflow-hidden max-w-24">
                            {tweet.username}
                          </span>
                          <span>
                            <LuDot className="text-[#71767B]" />
                          </span>
                          <span className="text-[#71767B] text-base">
                            {getTimeElapsed(tweet.timestamp)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span>
                          <BsThreeDots className="text-[#71767B]" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <div>
                    <span className="text-tw text-base leading-5">
                      {tweet.content}
                    </span>
                  </div>
                </div>
                {tweet.tweetImage && (
                  <div className="mt-3">
                    <img
                      className=" rounded-2xl aspect-auto h-full w-full"
                      src={tweet.tweetImage}
                    />
                  </div>
                )}

                <div className="flex w-full  justify-between items-center pt-2">
                  <div className="flex items-center gap-1">
                    <ReplyButton />
                    <span className="text-[#71767B] text-sm">4</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RetweetButton />
                    <span className="text-[#71767B] text-sm">4</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LikeButton />
                    <span className="text-[#71767B] text-sm">77</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Statistics />
                    <span className="text-[#71767B] text-sm">5 B</span>
                  </div>
                  <BookmarksButton />
                  <ShareButton />
                </div>
              </div>
            </article>
          </div>
        )
      )}
    </div>
  );
}

TweetsPosted.propTypes = {
  width: PropTypes.number.isRequired,
  tweetsData: PropTypes.array.isRequired,
  getTimeElapsed: PropTypes.func.isRequired,
};
