import TweetFactory from "../components/TweetFactory";
import React from "react";
import HomeImage from "./HomeImage";
import HomeMaterial from "./HomeMaterial";
import HomeCurri from "./HomeCurri";
import HomeContact from "./HomeContact";

const Home = ({ userObj }) => {
  // const [tweets, setTweets] = useState([]);

  // useEffect(() => {
  //   dbService.collection("tweets").onSnapshot((snapshot) => {
  //     const tweetArray = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setTweets(tweetArray);
  //   });
  // }, []);

  return (
    <div>
      <HomeImage />
      <HomeMaterial />
      <HomeCurri />
      <HomeContact />
      <TweetFactory userObj={userObj} />
      {/* <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
