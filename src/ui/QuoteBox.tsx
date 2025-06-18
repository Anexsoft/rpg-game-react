import React from "react";

type QuoteBoxProps = {
  avatar: string;
  name: string;
  message: string;
};

const QuoteBox: React.FC<QuoteBoxProps> = ({ avatar, name, message }) => {
  return (
    <div className="flex items-center justify-center gap-6 bg-black/60 p-8 rounded-lg shadow-md border border-gray-700">
      <blockquote className="text-md leading-relaxed italic text-gray-100 max-w-xl relative before:content-['“'] before:text-5xl before:absolute before:-top-8 before:-left-4 before:text-gray-400">
        <p className="mb-4">{message}</p>
        <footer className="text-right text-gray-400 font-bold mt-4">
          — {name}
        </footer>
      </blockquote>

      <figure className="min-w-36">
        <img
          src={avatar}
          alt={name}
          className="w-36 h-36 object-cover border-2 border-gray-400 rounded-md shadow-lg"
        />
      </figure>
    </div>
  );
};

export default QuoteBox;
