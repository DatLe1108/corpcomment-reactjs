import { useContext } from "react";
import { FeedbackItemContext } from "../../contexts/FeedbackItemsContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemContext);

  if (!context) {
    throw new Error(
      "useFeedbackItemsContext must be used within a FeedbackItemsContextProvider"
    );
  }

  return context;
}
