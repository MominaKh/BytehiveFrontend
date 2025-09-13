import React, { useState, useRef } from "react";
import TextSelectionPopup from "./TextSelectionPopup";
import CommentSection from "./CommentSection";

const BlogContent = () => {
  const [readingMode, setReadingMode] = useState("original");
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [upvotes, setUpvotes] = useState(120);
  const [downvotes, setDownvotes] = useState(5);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const contentRef = useRef(null);

  // Original blog content
  const originalContent = `
    Next.js has revolutionized the way we build React applications by providing a powerful framework that simplifies the development process. Combined with TypeScript, it creates an excellent developer experience with robust type safety.

    ## Getting Started with Next.js

    To get started with Next.js, you need to have Node.js installed on your machine. Once you have Node.js, you can create a new Next.js application using the following command:

    \`\`\`bash
    npx create-next-app my-app --typescript
    \`\`\`

    This command creates a new Next.js application with TypeScript support.

    ## File-Based Routing

    One of the most powerful features of Next.js is its file-based routing system. In the App Router, you create routes by adding folders and pages within the app directory:

    • app/page.tsx - Home page
    • app/about/page.tsx - About page  
    • app/blog/[id]/page.tsx - Dynamic blog post page

    This intuitive routing system makes it easy to structure your application and add new pages without configuring complex route definitions.

    ## Data Fetching

    Next.js provides several ways to fetch data in your application. In the App Router, you can use the following methods:

    \`\`\`javascript
    // Server Component
    async function Page() {
      const data = await fetch('https://api.example.com/data', {
        next: { revalidate: 60 }
      })
      const json = await data.json()
      
      return (
        <div>{json.title}</div>
      )
    }
    \`\`\`

    This example demonstrates how to fetch data in a Server Component with revalidation every 60 seconds.

    ## Conclusion

    Next.js and TypeScript provide a powerful combination for building modern web applications. With features like file-based routing, server components, and built-in optimization, Next.js simplifies the development process while TypeScript adds type safety and improves developer experience.
  `;

  // Simplified version
  const simplifiedContent = `
    **Key Takeaways:**
      

    • Next.js simplifies React development with powerful built-in features
    • TypeScript integration provides better code safety and developer experience
    • File-based routing makes navigation setup intuitive
    • Multiple data fetching options available for different use cases
    • Great for building modern, optimized web applications
    


    **Quick Summary:**



    Next.js is a React framework that makes building web apps easier. It includes automatic routing, TypeScript support, and various ways to load data. Perfect for developers who want a streamlined development experience.
  `;

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    if (text.length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setSelectedText(text);
      setPopupPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);
  
  const toggleUpvote = () => {
    if (isUpvoted) {
      setUpvotes(upvotes - 1);
      setIsUpvoted(false);
    } else {
      setUpvotes(upvotes + 1);
      setIsUpvoted(true);
      if (isDownvoted) {
        setDownvotes(downvotes - 1);
        setIsDownvoted(false);
      }
    }
  };

  const toggleDownvote = () => {
    if (isDownvoted) {
      setDownvotes(downvotes - 1);
      setIsDownvoted(false);
    } else {
      setDownvotes(downvotes + 1);
      setIsDownvoted(true);
      if (isUpvoted) {
        setUpvotes(upvotes - 1);
        setIsUpvoted(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-rich-black relative">
      {/*  Background Glow Effect */}
      <div
        className="absolute z-0"
        style={{
          width: 637,
          height: 300,
          top: -38,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#1A1842B3",
          filter: "blur(100px)",
          boxShadow: "0px 4px 100px 500px #00000066",
          borderRadius: 30,
          pointerEvents: "none",
        }}
      />
      
      <div className="relative z-10 container mx-auto px-5 sm:px-7 lg:px-10 py-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section with Buttons and Search */}
          <div className="flex items-center justify-between mb-6">
            {/* Left Side - Reading Mode Toggle */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setReadingMode("simplified")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-lato text-sm font-medium transition-all duration-200 ${
                  readingMode === "simplified"
                    ? "bg-medium-slate-blue text-white shadow-lg shadow-medium-slate-blue/30"
                    : "bg-rich-black-light text-periwinkle hover:bg-periwinkle-light border border-navbar-border"
                }`}
              >
                <span className="material-icons text-lg">auto_fix_high</span>
                <span>Simplify</span>
              </button>
              
              <button
                onClick={() => setReadingMode("original")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-lato text-sm font-medium transition-all duration-200 ${
                  readingMode === "original"
                    ? "bg-medium-slate-blue text-white shadow-lg shadow-medium-slate-blue/30"
                    : "bg-rich-black-light text-periwinkle hover:bg-periwinkle-light border border-navbar-border"
                }`}
              >
                <span className="material-icons text-lg">description</span>
                <span>Original</span>
              </button>
            </div>

            {/* Right Side - Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search in article"
                className="bg-transparent border border-[#393B5A] text-white rounded-[8px] h-[49px] pl-12 pr-4 w-96 text-base focus:outline-none font-lato placeholder-periwinkle"
              />
              <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-periwinkle text-xl">
                search
              </span>
            </div>
          </div>

          {/* Category and Meta Info */}
          <div className="flex items-center text-sm mb-4 font-lato">
            <span className="text-periwinkle px-3 py-1 rounded-xl font-semibold border border-solid border-navbar-border">
              Next.js Devs
            </span>
            <span className="mx-2 text-periwinkle">·</span>
            <span className="text-periwinkle">Mar 10, 2025 • 6 min read</span>
          </div>

          {/* Title */}
          <h1 className="font-fenix text-3xl md:text-4xl text-white mb-6 leading-tight">
            Building Modern Web Applications with Next.js and the TypeScript
          </h1>

          {/* Author Info */}
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGFljVK_1YLiLqNE8SMU0zsD2LUOv_ZJClfdq_DWp5FLd8KsDvQMnl0VOe2aFfU8eqc6M6I9aJ-VCGtFzHlUS0P9bjYnTWHMI5UO-pnf_7H4DGlvVnCe8Bj212iSAhJEonp7QjXn4VZAVbIpKHMYo4M70ouLkfY0wZPHju90a2vQzdL6Es79mMQ8NwXMHcJmqQaWhUuBwfkisr2uii-p0d3iFFfq4_RPcfykChX-MAS__NVdhAo3TLJvD4_LSMPxI_TLnrD1Gi_oFK"
              alt="David Lee"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-white font-lato font-medium text-base">David Lee</div>
              <div className="text-periwinkle text-sm font-lato">Author</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-chip text-periwinkle text-xs font-semibold px-3 py-1 rounded-xl font-lato">
              #Nextjs
            </span>
            <span className="bg-chip text-periwinkle text-xs font-semibold px-3 py-1 rounded-xl font-lato">
              #TypeScript
            </span>
            <span className="bg-chip text-periwinkle text-xs font-semibold px-3 py-1 rounded-xl font-lato">
              #WebDevelopment
            </span>
          </div>

          {/* Blog Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop"
              alt="Next.js and TypeScript"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Blog Content */}
          <div 
            ref={contentRef}
            className="mb-8"
            onMouseUp={handleTextSelection}
          >
            <div className="prose prose-invert max-w-none">
              {readingMode === "original" ? (
                <div className="text-white space-y-4">
                  {originalContent.split('\n\n').map((paragraph, index) => {
                    if (paragraph.trim().startsWith('##')) {
                      return (
                        <h2 key={index} className="text-2xl font-fenix text-white mt-8 mb-4 font-semibold">
                          {paragraph.replace('##', '').trim()}
                        </h2>
                      );
                    }
                    if (paragraph.trim().startsWith('```')) {
                      const codeContent = paragraph.replace(/```\w*\n?/, '').replace(/```$/, '');
                      return (
                        <div key={index} className="bg-rich-black-light rounded-lg p-4 my-6 border border-navbar-border">
                          <pre className="text-white text-sm overflow-x-auto font-mono">
                            <code>{codeContent}</code>
                          </pre>
                        </div>
                      );
                    }
                    if (paragraph.trim().startsWith('•')) {
                      const items = paragraph.split('•').filter(item => item.trim());
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 text-white font-lato text-base">
                          {items.map((item, i) => (
                            <li key={i} className="ml-4">{item.trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    return paragraph.trim() ? (
                      <p key={index} className="text-base leading-snug font-lato text-white">
                        {paragraph.trim()}
                      </p>
                    ) : null;
                  })}
                </div>
              ) : (
                <div className="text-white space-y-4">
                  {simplifiedContent.split('\n\n').map((section, index) => {
                    if (section.trim().startsWith('**') && section.trim().endsWith('**')) {
                      return (
                        <h2 key={index} className="text-2xl font-fenix text-white mb-4 font-semibold">
                          {section.replace(/\*\*/g, '')}
                        </h2>
                      );
                    }
                    if (section.trim().startsWith('•')) {
                      const items = section.split('•').filter(item => item.trim());
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 text-base">
                          {items.map((item, i) => (
                            <li key={i} className="ml-4 text-white font-lato">{item.trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    return section.trim() ? (
                      <p key={index} className="text-base leading-snug font-lato text-white">
                        {section.trim()}
                      </p>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Separator Line */}
          <hr className="border-navbar-border mb-8" />

          {/* Action Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              {/* Upvote */}
              <button
                onClick={toggleUpvote}
                className={`flex items-center space-x-2 transition-colors ${
                  isUpvoted ? "text-white" : "text-periwinkle hover:text-white"
                }`}
              >
                <span className="material-icons text-lg">thumb_up</span>
                <span className="font-lato font-medium">{upvotes}</span>
              </button>

              {/* Downvote */}
              <button
                onClick={toggleDownvote}
                className={`flex items-center space-x-2 transition-colors ${
                  isDownvoted ? "text-white" : "text-periwinkle hover:text-white"
                }`}
              >
                <span className="material-icons text-lg">thumb_down</span>
                <span className="font-lato font-medium">{downvotes}</span>
              </button>

              {/* Views */}
              <div className="flex items-center space-x-2 text-periwinkle">
                <span className="material-icons text-lg">visibility</span>
                <span className="font-lato font-medium">142</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Share */}
              <button className="flex items-center space-x-2 px-4 py-2 border border-periwinkle text-periwinkle rounded-md hover:bg-periwinkle-light transition-colors font-lato">
                <span className="material-icons text-lg">share</span>
                <span>Share</span>
              </button>

              {/* Save */}
              <button className="flex items-center space-x-2 px-4 py-2 border border-periwinkle text-periwinkle rounded-md hover:bg-periwinkle-light transition-colors font-lato">
                <span className="material-icons text-lg">bookmark_border</span>
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection />
        </div>
      </div>

      {/* Text Selection Popup */}
      {showPopup && (
        <TextSelectionPopup
          position={popupPosition}
          selectedText={selectedText}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default BlogContent;