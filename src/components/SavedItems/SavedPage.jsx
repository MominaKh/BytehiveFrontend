import React, { useState } from "react";
import SavedFilterBar from "./SavedFilterBar";
import SearchBar from "../../shared/SearchBar";
import BlogCard from "../BlogListing/BlogCard";

const SavedPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Items");
  
  const filters = ["All Items", "Unread", "Read Later"];
  
  // Mock saved items data
  const savedItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      community: "Next.js Devs",
      date: "Mar 10, 2026",
      readTime: "6 min",
      title: "Building Modern Web Applications with Next.js and TypeScript",
      description: "Learn how to leverage the power of Next.js and TypeScript to create robust, type-safe web applications with excellent developer experience.",
      tags: ["Next.js", "TypeScript", "WebDevelopment"],
      author: {
        name: "Alex Johnson",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGFljVK_1YLiLqNE8SMU0zsD2LUOv_ZJClfdq_DWp5FLd8KsDvQMnl0VOe2aFfU8eqc6M6I9aJ-VCGtFzHlUS0P9bjYnTWHMI5UO-pnf_7H4DGlvVnCe8Bj212iSAhJEonp7QjXn4VZAVbIpKHMYo4M70ouLkfY0wZPHju90a2vQzdL6Es79mMQ8NwXMHcJmqQaWhUuBwfkisr2uii-p0d3iFFfq4_RPcfykChX-MAS__NVdhAo3TLJvD4_LSMPxI_TLnrD1Gi_oFK"
      },
      upvotes: 142,
      downvotes: 16,
      comments: 24,
      views: 1850,
      bookmarked: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      community: "React Developers",
      date: "Mar 9, 2026",
      readTime: "4 min",
      title: "Advanced React Patterns and Performance Optimization",
      description: "Explore advanced React patterns, hooks optimization, and performance techniques to build lightning-fast applications.",
      tags: ["React", "Performance", "Hooks"],
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwcHJvZmlsZSUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
      },
      upvotes: 89,
      downvotes: 5,
      comments: 18,
      views: 1200,
      bookmarked: true
    },
    {
      id: 3,
    
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      community: "Full Stack",
      date: "Mar 8, 2026",
      readTime: "8 min",
      title: "Building Scalable APIs with Node.js and Express",
      description: "Learn how to design and implement scalable REST APIs using Node.js, Express, and modern development practices.",
      tags: ["Node.js", "Express", "API"],
      author: {
        name: "Michael Rodriguez",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0SOH_qdug48AdwWxvlB89VAMgWwLvCzU5nSDeh7sGBOxfcwtoGxXGFu3Q2JauQZWpKqk-GCgCttE6cJIsPEkbYBWNgz8qS6HIT-5Sz6LgHkDAzWnkSvAOUOk7CDaVV0qGaLh5TF5SZPN1EfhhvDKzelBH3komHVKuAU_sLPUdP82-LnV5uJEpBfaz0d1ZudZEkDGu7GEHq46ftKnljIDa0wEpEPuusxbFSIsOPoONgMi3EDnu1Bupe8IbBw6vKFxxdMaP6_2s5fii"
      },
      upvotes: 156,
      downvotes: 12,
      comments: 32,
      views: 2100,
      bookmarked: true
    },
    {
      id: 4,
       image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      community: "DevOps",
      date: "Mar 7, 2026",
      readTime: "5 min",
      title: "Modern DevOps Practices with Docker and Kubernetes",
      description: "Master containerization and orchestration with Docker and Kubernetes for scalable application deployment.",
      tags: ["Docker", "Kubernetes", "DevOps"],
      author: {
        name: "Emily Davis",
        avatar: "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      upvotes: 98,
      downvotes: 8,
      comments: 15,
      views: 1400,
      bookmarked: true
    }
  ];

  return (
    <div className="min-h-screen bg-rich-black text-white relative">
      {/* Background Glow Effect */}
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
      
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div>
              <h1 className="font-fenix text-[28px] text-white mb-1">
                Saved Items
              </h1>
              <p className="text-desc text-base">
                Access your bookmarked content anytime
              </p>
            </div>
            
            {/* Search Bar - Top Right with increased width */}
            <div className="flex items-center gap-4 w-full md:w-[500px]">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8">
          <SavedFilterBar 
            filters={filters}
            selected={selectedFilter}
            onSelect={setSelectedFilter}
          />
        </div>

        {/* Saved Items Grid */}
        <div className="space-y-6">
          {savedItems.map((item) => (
            <BlogCard
              key={item.id}
              image={item.image}
              community={item.community}
              date={item.date}
              readTime={item.readTime}
              title={item.title}
              description={item.description}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              downvotes={item.downvotes}
              comments={item.comments}
              views={item.views}
              bookmarked={item.bookmarked}
            />
          ))}
        </div>

        {/* Empty State (if no saved items) */}
        {savedItems.length === 0 && (
          <div className="text-center py-16">
            <span className="material-icons text-6xl text-columbia-blue mb-4 block">
              bookmark_border
            </span>
            <h3 className="font-fenix text-2xl text-white mb-2">
              No saved items yet
            </h3>
            <p className="text-columbia-blue">
              Start bookmarking posts to see them here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;