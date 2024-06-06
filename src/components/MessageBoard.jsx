import { useState } from "react";

function MessageBoard() {
  const [inputMsg, setInputMsg] = useState("");
  const [message, setMessage] = useState([]);

  const handleInput = (event) => {
    setInputMsg(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    if (inputMsg) {
      const newMessage = [...message];
      newMessage.push(inputMsg);
      setMessage(newMessage);
    }
  };

  const remove = (removeIndex) => {
    const removeMsg = [...message];
    removeMsg.splice(removeIndex, 1);
    setMessage(removeMsg);
  };

  // console.log(inputMsg);

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMsg}
            onChange={handleInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {message.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button className="delete-button" onClick={remove}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//<h1>Hello all ! This is first message.</h1>

export default MessageBoard;
