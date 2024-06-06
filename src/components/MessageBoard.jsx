import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [keepmessage, setKeepmessage] = useState([]);

  const handleMsg=(event)=>{
    setMessage(event.target.value)
  }

  const handleClick=(event)=>{
    event.preventDefault()
    const reArray = [...keepmessage];
    reArray.push(message)
    setKeepmessage(reArray)
  }

  const removeMsg=(index)=>{
    const removeArray = [...keepmessage];
    removeArray.splice(index,1)
    setKeepmessage(removeArray)
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            onChange={handleMsg}
            placeholder="Enter message here"
          />
        </label>
        <button onClick={handleClick}className="submit-message-button">
          Submit
        </button>
      </div>
      <div className="board">
        {keepmessage.map((item,index)=>{
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button className="delete-button" onClick={removeMsg} >
                x
              </button>
              </div>
          )
        })}
              
            
        
        </div>
    </div>
  );
}

export default MessageBoard;
