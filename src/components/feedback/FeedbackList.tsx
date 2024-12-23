import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../hooks/useFeedbackItemsContext";

export default function FeedbackList() {
  const { isLoading, errorMessages, filteredFeedbackItems } =
    useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessages && <ErrorMessage message={errorMessages} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
