// import HashtagList from "./hashtag/HashtagList";
// import Footer from "./layout/Footer";
// import Container from "./layout/Container";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      {/* <Footer />

      <Container />

      <HashtagList /> */}
      <iframe
        data-qplayer-media-id="40ca68aa-3e09-4d57-a9dc-0b03928585f6"
        title="Jumo Jump"
        data-cookieblock-src="https://play2.qbrick.com/qplayer-beta/index.html?accountId=123516&mediaId=40ca68aa-3e09-4d57-a9dc-0b03928585f6&configId=Interactive"
        data-cookieconsent="statistics"
        allowFullScreen={true}
        frameBorder={0}
        // border="0"
        height="360"
        width="640"
      />
    </div>
  );
}

export default App;
