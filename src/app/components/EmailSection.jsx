"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    // const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/shekhar8352" className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full hover:bg-white/20">
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/sudhanshu-shekhar-631683204/" className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full hover:bg-white/20">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-400 text-sm mt-2 border border-green-500/20 bg-green-500/10 p-4 rounded-lg">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-slate-800/50 border border-slate-700 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all backdrop-blur-sm"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-slate-800/50 border border-slate-700 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all backdrop-blur-sm"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-slate-800/50 border border-slate-700 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all backdrop-blur-sm min-h-[150px]"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-3 px-5 rounded-lg w-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
