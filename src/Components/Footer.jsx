// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <div className="w-12 border-t-2 border-yellow-500 mb-4"></div>
          <p className="text-gray-400">
          <span className="font-semibold font-mono text-xl text-yellow-500">DJ Offwhite</span> is a dynamic artist known for blending electrifying beats with a unique flair, setting the stage on fire at every event. His signature style and infectious energy make him the heart of unforgettable parties and music festivals.
          </p>
        </div>

        {/* Navigations Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navigations</h3>
          <div className="w-12 border-t-2 border-yellow-500 mb-4"></div>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">DJs</a></li>
            <li><a href="#">Events</a></li>
           
          </ul>
        </div>

        {/* Follow Us and Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="w-12 border-t-2 mb-4"></div>
          <div className="flex space-x-4">
      {/* YouTube */}
      <a href="https://www.youtube.com/@dj.offwhite" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 text-red-600 transition duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M23.499 6.203a2.993 2.993 0 0 0-2.106-2.12C19.477 3.5 12 3.5 12 3.5s-7.478 0-9.394.583A2.993 2.993 0 0 0 .5 6.204 31.05 31.05 0 0 0 0 12a31.05 31.05 0 0 0 .5 5.797 2.993 2.993 0 0 0 2.106 2.12C4.523 20.5 12 20.5 12 20.5s7.478 0 9.394-.583a2.993 2.993 0 0 0 2.106-2.12A31.05 31.05 0 0 0 24 12a31.05 31.05 0 0 0-.501-5.797ZM9.75 15.023V8.977L15.2 12Z" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/dj.offwhite/" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 text-red-400 transition duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.176 15.584 2.163 15.204 2.163 12s.013-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.176 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.014 7.052.072 5.737.129 4.505.384 3.443 1.446c-1.062 1.062-1.317 2.294-1.374 3.609-.058 1.28-.072 1.684-.072 5.048s.014 3.768.072 5.048c.057 1.315.312 2.547 1.374 3.609 1.062 1.062 2.294 1.317 3.609 1.374 1.28.058 1.684.072 5.048.072s3.768-.014 5.048-.072c1.315-.057 2.547-.312 3.609-1.374 1.062-1.062 1.317-2.294 1.374-3.609.058-1.28.072-1.684.072-5.048s-.014-3.768-.072-5.048c-.057-1.315-.312-2.547-1.374-3.609-1.062-1.062-2.294-1.317-3.609-1.374C15.768.014 15.368 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 0 1 0 7.676zm7.2-11.925a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
        </svg>
      </a>

      {/* Facebook */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 text-blue-600 transition duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M22.675 0h-21.35C.58 0 0 .575 0 1.284v21.431c0 .71.58 1.285 1.325 1.285h11.492v-9.338H9.577v-3.64h3.24v-2.687c0-3.271 1.992-5.056 4.9-5.056 1.389 0 2.58.104 2.926.15v3.397h-2.006c-1.577 0-1.885.749-1.885 1.847v2.349h3.775l-.493 3.64h-3.282V24h6.44c.745 0 1.325-.575 1.325-1.284V1.284C24 .575 23.42 0 22.675 0z" />
        </svg>
      </a>
    </div>

        </div>

        {/* Watch Video Section */}
        <div>
  <h3 className="text-lg font-bold mb-4">Watch Video</h3>
  <div className="w-12 border-t-2 border-yellow-500 mb-4"></div>
  <div className="relative">
    <a
      href="https://www.instagram.com/reel/DCeL3CGh1c5/"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src="./assets/image.png" // Replace with your thumbnail URL
        alt="Instagram Reel"
        className="w-full rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-4.586-3.036A1 1 0 009 9.94v4.12a1 1 0 001.166.993l4.586-1.82a1 1 0 000-1.865z"
            />
          </svg>
        </div>
      </div>
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
