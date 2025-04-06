"use client";
import React from "react";
import YouTube from "react-youtube";
import ReactMarkdown from "react-markdown";

const opts = {
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

function ChpaterContent({ chapter, content }) {
  return (
    <div className="text-white px-4 py-6 sm:px-6 md:px-10 md:py-10 ">
      {/* Chapter Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#79b8ff] mb-2">
        {chapter?.ChapterName}
      </h2>

      <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
        {chapter?.About}
      </p>

      {/* Video Section */}
      {content?.VideoId && (
        <div className="mb-8 sm:mb-10 aspect-video w-full max-w-[900px] mx-auto">
          <YouTube videoId={content.VideoId} opts={opts} className="w-full h-full" />
        </div>
      )}

      {/* Content Blocks */}
      {content?.content?.map((item, index) => (
        <div
          key={index}
          className="p-4 sm:p-5 mb-6 rounded-lg bg-white/5 border border-white/10 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="font-semibold text-lg sm:text-xl text-[#add8ff] mb-3">
            {item.title}
          </h3>

          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p className="text-gray-300 text-sm sm:text-base whitespace-pre-wrap leading-relaxed mb-4" {...props} />
              ),
              h1: ({ node, ...props }) => (
                <h1 className="text-2xl font-bold text-white my-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-semibold text-white my-3" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="ml-6 list-disc text-sm sm:text-base text-gray-300" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) =>
                inline ? (
                  <code className="bg-gray-800/60 px-1 py-0.5 rounded text-blue-200 text-xs sm:text-sm" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="bg-gray-900/70 p-4 rounded overflow-x-auto my-3">
                    <code className="text-blue-200 text-sm" {...props}>
                      {children}
                    </code>
                  </pre>
                ),
            }}
          >
            {item.explanation}
          </ReactMarkdown>

          {item.code_example && (
            <div className="bg-black/50 text-sm text-blue-200 font-mono p-3 sm:p-4 mt-4 rounded-md overflow-x-auto hover:scale-[1.01] transition-transform">
              <pre>
                <code>{item.code_example}</code>
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChpaterContent;
