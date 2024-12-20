import { useEffect, useState } from "react";
import FeedbackItemComponent from "./FeedbackItemComponent";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  useEffect(() => {
    const fetchFeedbacksItems = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessages("An error occurred while fetching feedbacks.");
      }

      setIsLoading(false);
    };

    fetchFeedbacksItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessages && <ErrorMessage message={errorMessages} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItemComponent
          key={feedbackItem.id}
          feedbackItem={feedbackItem}
        />
      ))}
    </ol>
  );
}
