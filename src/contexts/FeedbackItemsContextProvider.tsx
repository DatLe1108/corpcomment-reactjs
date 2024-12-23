import { createContext, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";
import useFeedbackItems from "../components/hooks/useFeedbackItems";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemContext = {
  isLoading: boolean;
  errorMessages: string;
  companyList: string[];
  filteredFeedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
  handleSelectedCompany: (company: string) => void;
};

export const FeedbackItemContext = createContext<TFeedbackItemContext | null>(
  null
);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const { isLoading, errorMessages, feedbackItems, setFeedbackItems } =
    useFeedbackItems();
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItems) => feedbackItems.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleAddToList = async (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
      company,
      text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <FeedbackItemContext.Provider
      value={{
        isLoading,
        errorMessages,
        companyList,
        filteredFeedbackItems,
        handleAddToList,
        handleSelectedCompany,
      }}
    >
      {children}
    </FeedbackItemContext.Provider>
  );
}
