import { useEffect, useState } from "react";
import { TFeedbackItem } from "../../lib/types";

export default function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
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

  return {
    isLoading,
    errorMessages,
    feedbackItems,
    setFeedbackItems,
  };
}
