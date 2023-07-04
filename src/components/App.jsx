import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function createEntry(emojiTerms) {
  return (
    <Entry
      //  key= {emojiTerms.key}
      emoji={emojiTerms.emoji}
      name={emojiTerms.name}
      exp={emojiTerms.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry
          emoji="😀"
          name="Grinning Face"
          exp="“The grinning face 😀 expresses joy, happiness and satisfaction and is a very common and popular emoji in digital communication."
        />
        <Entry
          emoji="🥹 "
          name="Face Holding Back Tears"
          exp="The 🥹 emoji, which shows a slightly smiling face with tears in its eyes, can express various emotions such as gratitude, emotion, or pride. At the same time, anger or rage can also be the reason why tears can hardly be held back"
        />
        <Entry
          emoji="🥲 "
          name="Smiling face with tear"
          exp="The 🥲 emoji stands for smiling through the tough times and symbolizes trying to stay positive even in difficult moments."
        />
        <Entry
          emoji="😊"
          name="Smiling Face With Smiling Eyes"
          exp="With a shy, embarrassed smile, the 😊 emoji radiates happiness, contentment, peace of mind, and gratitude."
        />

        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
