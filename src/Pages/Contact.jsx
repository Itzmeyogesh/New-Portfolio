import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your backend logic here (e.g., EmailJS or API call)
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-sky-950 to-slate-900 text-white py-16 px-4 md:px-20">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="text-sky-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-sky-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 transition-all text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
