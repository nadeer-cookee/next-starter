'use client';
import { Container } from "../components/ui/containers";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Home = () => {
  const sendMessage = () => {
    socket.emit();
  };
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md w-full mt-5">
      <h2 className="text-2xl mb-4">Message Sender</h2>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600"
        >
          Type your message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full resize-none"
          placeholder="Type your message here"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={sendMessage}
      >
        Send Message
      </button>
    </div>
  );
};

export default Home;
