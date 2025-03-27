import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    
  };

  return (
    <div className="relative min-h-screen bg-[#F9F9F9] p-8">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-your-uploaded-image.png')] bg-cover bg-no-repeat opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white text-[#3d155f] p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-4xl font-extrabold text-[#4831d4] mb-4">Send me a message!</h2>
          <p className="mb-6">Got a question or an enquiry? Go ahead.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-purple-400 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-purple-400 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-purple-400 rounded-lg"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-36 py-3 px-6 bg-[#4831d4] text-white rounded-lg font-semibold text-lg hover:bg-purple-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
