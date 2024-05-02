import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

const tweetCollectionRef = collection(db, "tweets");

async function addTweet(tweetData) {
  try {
    await addDoc(tweetCollectionRef, {
      ...tweetData,
      timestamp: new Date(),
    });
    console.log("Tweet başarıyla eklendi!");
  } catch (error) {
    console.error("Tweet eklenirken bir hata oluştu: ", error);
  }
}

export { addTweet };
