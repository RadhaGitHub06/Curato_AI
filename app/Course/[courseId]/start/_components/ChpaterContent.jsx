"use client";
import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown'

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

function ChpaterContent({ chapter, content }) {
  return (
    <motion.div
      className="text-white p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chapter Header */}
      <motion.h2
        className="text-3xl font-bold text-[#79b8ff] mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {chapter?.ChapterName}
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {chapter?.About}
      </motion.p>

      {/* Video Section */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <YouTube videoId={content?.VideoId} opts={opts} />
      </motion.div>

      {/* Content Blocks */}
      {content?.content?.map((item, index) => (
        <motion.div
          key={index}
          className="p-5 mb-6 rounded-lg bg-white/5 border border-white/10 hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * (index + 1) }}
        >
          <h3 className="font-semibold text-xl text-[#add8ff] mb-3">
            {item.title}
          </h3>
          <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{item.explanation}</p>
        <p>
  {item.explanation}</p>

          {item.code_example && (
            <div className="bg-black/50 text-sm text-blue-00 font-mono p-4 mt-4 rounded-md overflow-x-auto transition-all duration-300 hover:scale-[1.01]">
              <pre>
                <code>{item.code_example}</code>
              </pre>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ChpaterContent;
