import React from "react";

const HighlightedText = ({
  text,
  keywords,
  highlightClass = "highlighter",
}) => {
  if (!keywords || keywords.length === 0) return text;

  // Create a regex pattern that matches any of the keywords
  const pattern = new RegExp(`(${keywords.join("|")})`, "gi");

  // Split the text into parts, some of which will be highlighted
  const parts = text.split(pattern);

  console.log(parts, "=====PARTS=====");

  return (
    <>
      {parts.map((part, index) =>
        keywords.some(
          (keyword) => keyword.toLowerCase() === part.toLowerCase()
        ) ? (
          <span key={index} className={highlightClass}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightedText;
