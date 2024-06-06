import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [massageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(massageText);
    setMessage(newMessage);
  };

  const deleteMessage = (index) => {
    const newMessage = [...message];
    newMessage.splice(index, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageTextChange}
            value={massageText}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div className="message">
              <p>{item}</p>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
