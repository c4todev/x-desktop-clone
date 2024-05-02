import NewTweet from "./Feed/NewTweet";
import TweetsPosted from "./Feed/TweetsPosted";
import NavbarMobile from "./Header/NavbarMobile";
import BottomNavbarMobile from "./Header/BottomNavbarMobile";
import PostNewTweetOnTop from "./PostNewTweet/PostNewTweetOnTop";
import PropTypes from "prop-types";
import NavbarMobileMD from "./Header/NavbarMobileMD";

export default function Page({
  width,
  tweetsData,
  tweetInput,
  selectedTab,
  scrollPosition,
  handleSettings,
  getTimeElapsed,
  setSelectedTab,
  setSidebarOpen,
  handlePostTweet,
  handleTweetInput,
  selectedBottomTab,
  handlePostTweetPage,
  setSelectedBottomTab,
}) {
  return (
    <div className="w-full">
      {width < 500 ? (
        <div className="w-full">
          <div className="w-full flex flex-col">
            <NavbarMobile
              selectedTab={selectedTab}
              handleSettings={handleSettings}
              scrollPosition={scrollPosition}
              setSidebarOpen={setSidebarOpen}
              setSelectedTab={setSelectedTab}
            />
            <div>
              <TweetsPosted
                tweetsData={tweetsData}
                width={width}
                getTimeElapsed={getTimeElapsed}
              />
            </div>
            {width < 500 && (
              <div className="rounded-full bg-[#1D9BF0] fixed bottom-20 right-5 self-center p-4 drop-shadow-lg shadow-sm  transition-opacity duration-50 active:opacity-70">
                <NewTweet back={handlePostTweetPage} />
              </div>
            )}
          </div>
          <BottomNavbarMobile
            scrollPosition={scrollPosition}
            selectedBottomTab={selectedBottomTab}
            setSelectedBottomTab={setSelectedBottomTab}
          />
        </div>
      ) : width >= 500 ? (
        <div className="min-w-[375px]">
          <NavbarMobileMD
            scrollPosition={scrollPosition}
            selectedTab={selectedTab}
            handleSettings={handleSettings}
            setSelectedTab={setSelectedTab}
          />
          <div>
            <PostNewTweetOnTop
              tweetInput={tweetInput}
              onClick={handlePostTweet}
              back={handlePostTweetPage}
              handleTweetInput={handleTweetInput}
            />
          </div>
          <div className="w-full">
            <TweetsPosted
              tweetsData={tweetsData}
              width={width}
              getTimeElapsed={getTimeElapsed}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
Page.propTypes = {
  width: PropTypes.number,
  tweetsData: PropTypes.array.isRequired,
  tweetInput: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  scrollPosition: PropTypes.number.isRequired,
  selectedBottomTab: PropTypes.string.isRequired,
  getTimeElapsed: PropTypes.func.isRequired,
  handleSettings: PropTypes.func.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  handlePostTweet: PropTypes.func.isRequired,
  handleTweetInput: PropTypes.func.isRequired,
  handlePostTweetPage: PropTypes.func.isRequired,
  setSelectedBottomTab: PropTypes.func.isRequired,
};
