import { useState } from "react";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Get in Touch</h1>
        <p className={`text-base ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
          Feel free to reach out for opportunities, collaborations, or questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div
          className={`border rounded-2xl p-8 flex flex-col justify-between ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-5 text-sm">
              <div>
                <p className={`font-semibold ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
                  Name
                </p>
                <p className="text-base font-medium">Pasula Shloka Reddy</p>
              </div>

              <div>
                <p className={`font-semibold ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
                  Location
                </p>
                <p className="text-base font-medium">Hyderabad, Telangana, India</p>
              </div>

              <div>
                <p className={`font-semibold ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
                  GitHub
                </p>
                <a
                  href="https://github.com/Pasula-Shloka"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-medium text-blue-500 hover:underline"
                >
                  github.com/Pasula-Shloka
                </a>
              </div>

              <div>
                <p className={`font-semibold ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/pasula-shloka"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-medium text-blue-500 hover:underline"
                >
                  linkedin.com/in/pasula-shloka
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-8 pt-6 border-t ${darkMode ? "border-zinc-800 text-zinc-400" : "border-gray-200 text-gray-500"} text-xs`}>
            Open to internships, frontend development projects, and software engineering roles.
          </div>
        </div>

        {/* Message Form */}
        <div
          className={`border rounded-2xl p-8 ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className={`text-sm mb-6 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
                Thank you for reaching out, {formData.name}. I'll get back to you soon!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Send a Message</h2>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-500"
                      : "bg-white border-gray-300 text-black focus:ring-black"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-500"
                      : "bg-white border-gray-300 text-black focus:ring-black"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-500"
                      : "bg-white border-gray-300 text-black focus:ring-black"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-medium transition ${
                  darkMode
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-black text-white hover:bg-zinc-800"
                }`}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;