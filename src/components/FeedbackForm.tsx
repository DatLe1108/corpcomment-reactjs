import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTest = event.target.value;

    if (newTest.length > MAX_CHARACTERS) {
      return;
    }
    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        ter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
