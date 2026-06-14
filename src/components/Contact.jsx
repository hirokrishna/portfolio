import React, { useState } from 'react';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Netlify Forms integration - the form will be processed by Netlify
      // When deployed to Netlify, this will automatically handle form submissions
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();

        // TODO: Zapier Integration
        // After setting up Zapier webhook, add the webhook URL here
        // This will trigger an automated thank-you email to the form submitter
        /*
        await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
          })
        });
        */
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]';
      messageBox.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-xl text-center">
          <h3 class="text-xl font-bold text-red-600 mb-4">Error!</h3>
          <p class="text-gray-700 mb-6">Submission failed. Try again later.</p>
          <button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onclick="this.parentNode.parentNode.remove()">Close</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen flex flex-col items-center">
      <div className="container mx-auto max-w-4xl bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-up w-full">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Let's Connect & Collaborate</h2>
        <p className="text-center text-gray-600 mb-10">
          I'm always open to discussing opportunities or just chatting tech. Reach out below!
        </p>

        {/* Netlify Forms integration - add netlify attribute and hidden form-name field */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            <div className="flex-grow flex flex-col">
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full h-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none min-h-[150px]"
              ></textarea>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
              {success && (
                <div className="text-green-600 text-center font-semibold mt-4">
                  Message sent successfully!
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      <div className="mt-16 text-center w-full">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Find Me On:</h3>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/krishnapathak29/" target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            title="LinkedIn">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.798c0-3.245 3.102-3.528 3.102 0v8.798h4.98v-10.13c0-6.177-7.007-5.938-8.082-2.99z" />
            </svg>
          </a>
          <a href="https://github.com/hirokrishna" target="_blank" rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            title="GitHub">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.835.09-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.988 1.029-2.688-.103-.253-.446-1.272.097-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.651.64.7 1.028 1.592 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.281 24 16.527 24 12.017 24 6.484 19.522 2 14 2H12z"
                clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://leetcode.com/u/hiroKrishna/" target="_blank" rel="noopener noreferrer"
            className="group text-gray-700 transition-transform duration-300 transform hover:scale-110"
            title="LeetCode">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode Logo"
              className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </a>
          <a href="https://www.instagram.com/krishna.pathak29" target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            title="Instagram">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z" />
            </svg>
          </a>
          <a href="mailto:pathakkrishna551@gmail.com"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            title="Email Me">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;