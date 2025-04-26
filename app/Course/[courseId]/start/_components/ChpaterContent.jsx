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
      className="text-white p-6 md:p-10 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chapter Header */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#79b8ff] drop-shadow-md">
          {chapter?.ChapterName || "Start Your Learning With CuratoAi"}
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          {chapter?.About || "Click on Chapter "}
        </p>
      </motion.div>

      {/* Video Section */}
      {content?.VideoId && (
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <YouTube videoId={content?.VideoId} opts={opts} />
        </motion.div>
      )}

      {/* Content Blocks */}
      <div className="space-y-6">
        {content?.content?.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 1) }}
          >
            <h3 className="font-semibold text-2xl text-[#add8ff] mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 whitespace-pre-wrap leading-relaxed text-base mb-4">
              {item.explanation}
            </p>

            {/* Code Block */}
            {item.code_example && (
              <div className="bg-black/50 text-green-300 font-mono text-sm p-4 rounded-md overflow-x-auto">
                <pre>
                  <code>{item.code_example}</code>
                </pre>
              </div>
            )}
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}

export default ChpaterContent;
