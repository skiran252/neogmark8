import React, { useState } from "react";
import EmojiDictionary from "./emoji.json";
function App() {
  const [message, setMessage] = useState("identified emoji will be shown here");

  const identifyEmoji = (e) => {
    let emojiName = "Could not recognize this emoji";
    const emoji = e.target.value;
    EmojiDictionary.forEach((element) => {
      if (element.emoji === emoji) {
        emojiName = element.description;
      }
    });
    setMessage(emojiName);
  };

  const displayEmojiName = (e,name) => {
    setMessage(name);
  };
  return (
    <div className="container text-center">
      <h1 className="text-center mt-5 mb-3">Emoji Identifier</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your Emoji here"
        onChange={identifyEmoji}
      />
      <div className="mt-3 fw-bolder fs-3">{message}</div>
      <div>
        {EmojiDictionary.map((emoji, index) => {
          return (
            <span key={index} className="fs-3 fw-bold p-2 emoji" onClick={(e)=>displayEmojiName(e,emoji.description)}>
              {emoji.emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
