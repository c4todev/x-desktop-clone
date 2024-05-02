import "./App.css";
import tweets from "../tweets";
import { v4 as uuidv4 } from "uuid";
import Page from "./components/Page";
import { useState, useEffect } from "react";
import Sidebar from "./components/Feed/Sidebar";
import SidebarBG from "./components/Feed/SidebarBG";
import { addTweet } from "./hooks/firebase/toFirebase";
import Settings from "./components/Icon-Components/Settings";
import PostNewTweet from "./components/PostNewTweet/PostNewTweet";
import SidebarFixed from "./components/Feed/SidebarFixed";

function App() {
  const [selectedTab, setSelectedTab] = useState("Sana özel");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedBottomTab, setSelectedBottomTab] = useState("Home");
  const [settingsPage, setSettingsPage] = useState(false);
  const [postTweetPage, setPostTweetPage] = useState(false);
  const [newTweets, setNewTweets] = useState([]);
  const [tweetsData, setTweetsData] = useState([]);
  const [tweetInput, setTweetInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    const mergedTweets = [...storedTweets, ...tweets];
    setTweetsData(mergedTweets);
  }, []);

  const handlePostTweetPage = () => {
    setPostTweetPage((prevPostTweetPage) => !prevPostTweetPage);
  };

  const handleTweetInput = (e) => {
    setTweetInput(e.target.value);
  };

  function handlePostTweet() {
    const newTweet = {
      userId: uuidv4(),
      tweetData: {
        id: newTweets.length + 1,
        author: "Mike Hann",
        username: "@mikehann",
        content: tweetInput,
        timestamp: new Date(),
        avatar: "./man2.jpg",
      },
    };
    addTweet(newTweet);
    setNewTweets((prevNewTweets) => [newTweet, ...prevNewTweets]);
    const updatedTweets = [newTweet, ...tweetsData];
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));

    setTweetsData(updatedTweets);

    setTimeout(() => {
      setTweetInput("");
      setPostTweetPage((prevPostTweetPage) => !prevPostTweetPage);
    }, 1000);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowWidth);
    handleWindowWidth();
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  function getTimeElapsed(timestamp) {
    const now = new Date();
    const tweetTime = new Date(timestamp);

    const differenceInSeconds = Math.floor((now - tweetTime) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds}sn`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes}d`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours}s`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days}g`;
    }
  }

  const handleSettings = () => {
    setSettingsPage((prevSettingsPage) => !prevSettingsPage);
  };

  return (
    <div className="w-full min-w-[375px]">
      {width < 500 ? (
        <div>
          <Sidebar width={width} isOpen={sidebarOpen} />
          <SidebarBG
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      ) : (
        !settingsPage &&
        !postTweetPage && (
          <SidebarFixed
            back={handlePostTweetPage}
            selectedBottomTab={selectedBottomTab}
            setSelectedBottomTab={setSelectedBottomTab}
          />
        )
      )}

      {settingsPage && !postTweetPage ? (
        <Settings back={handleSettings} />
      ) : !settingsPage && postTweetPage ? (
        <PostNewTweet
          tweetInput={tweetInput}
          onClick={handlePostTweet}
          back={handlePostTweetPage}
          handleTweetInput={handleTweetInput}
        />
      ) : (
        <Page
          width={width}
          tweetsData={tweetsData}
          tweetInput={tweetInput}
          selectedTab={selectedTab}
          scrollPosition={scrollPosition}
          handleSettings={handleSettings}
          getTimeElapsed={getTimeElapsed}
          setSelectedTab={setSelectedTab}
          setSidebarOpen={setSidebarOpen}
          handlePostTweet={handlePostTweet}
          handleTweetInput={handleTweetInput}
          selectedBottomTab={selectedBottomTab}
          handlePostTweetPage={handlePostTweetPage}
          setSelectedBottomTab={setSelectedBottomTab}
        />
      )}
    </div>
  );
}

export default App;
