import React, { useState } from "react";
import SearchBar from "../shared/SearchBar";
import NewCommunityButton from "../shared/NewCommunityButton";
import Navbar from "../shared/Navbar";
import CommunityCard from "../components/CommunityListing/CommunityCard";
import CommunityFilterBar from "../components/CommunityListing/CommunityFilterBar";

// Dummy Communities Data
const DUMMY_COMMUNITIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    name: "Next.js Devs",
    description: "A community for Next.js developers to share knowledge, ask questions & collaborate on projects.",
    memberCount: 5284,
    postCount: 1482,
    isFollowing: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=600&q=80",
    name: "Game Designers",
    description: "Connect with game designers and developers to discuss game mechanics, design patterns, and industry trends.",
    memberCount: 3847,
    postCount: 892,
    isFollowing: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    name: "AI Enthusiasts",
    description: "Explore the latest in AI, machine learning, and neural networks with like-minded tech enthusiasts.",
    memberCount: 7256,
    postCount: 2143,
    isFollowing: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
    name: "Blockchain Builders",
    description: "Discuss blockchain technology, smart contracts, and decentralized applications with fellow developers.",
    memberCount: 4923,
    postCount: 1267,
    isFollowing: true,
  },
   {
    id: 5,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=600&q=80",
    name: "React Native Hub",
    description: "Mobile development community focused on React Native, sharing best practices and solutions.",
    memberCount: 6189,
    postCount: 1834,
    isFollowing: false,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    name: "DevOps Masters",
    description: "Learn and share DevOps practices, CI/CD pipelines, and cloud infrastructure strategies.",
    memberCount: 4567,
    postCount: 1098,
    isFollowing: false,
  },
 
];

// Filters
const FILTERS = ["Your Communities", "Discover Communities"];

const Communities = () => {
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  // Filter communities based on selected filter
  const filteredCommunities = selectedFilter === "Your Communities" 
    ? DUMMY_COMMUNITIES.filter(community => community.isFollowing)
    : DUMMY_COMMUNITIES;

  return (
    <div className="min-h-screen bg-rich-black flex flex-col relative">
      <Navbar />

      {/* Background Glow */}
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

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-9">
          {/* Title */}
          <div className="z-10">
            <h2 className="font-fenix text-[28px] text-white font-normal text-center md:text-left">
              Communities
            </h2>
            <p className="text-desc font-lato text-center md:text-left">Connect with like-minded developers and tech enthusiasts.</p>
          </div>

          {/* Search + Create Community Button */}
          <div className="flex items-center gap-1 w-full md:w-[600px] z-10">
            <SearchBar 
              className="flex-1 max-w-xs sm:max-w-md" 
              placeholder="Search communities"
            />
            <NewCommunityButton />
          </div>
        </div>

        {/* Filter */}
        <div className="mb-0">
          <CommunityFilterBar
            filters={FILTERS}
            selected={selectedFilter}
            onSelect={setSelectedFilter}
          />
        </div>
      </div>

      {/* Content - moved up with negative margin to eliminate gap */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 z-10 -mt-4">
        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCommunities.map((community) => (
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;