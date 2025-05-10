import { useState, useEffect, useRef} from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  const handelEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span> Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
                <span>5 min ago</span>
            </div>
        </div>
        <div className="message own">
            <div className="texts">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
                <span>5 min ago</span>
            </div>
        </div>
        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
                <span>5 min ago</span>
            </div>
        </div>
        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fpcm98ZW58MHwwfDB8fHww" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
                <span>5 min ago</span>
            </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handelEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
