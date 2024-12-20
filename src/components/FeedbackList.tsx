import FeedbackItemComponent from "./FeedbackItemComponent";

export default function FeedbackList() {
  const feedbackItem = {
    upvoteCount: 0,
    badgeLetter: "A",
    companyName: "Company",
    text: "This is a feedback item",
    daysAgo: 1,
  };

  const feedbackItems = [feedbackItem];

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItemComponent feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
