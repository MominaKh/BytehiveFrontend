import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarCard = ({ title, description, buttonText, icon, navigateTo }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="bg-navbar-bg border border-navbar-border rounded-2xl p-5 flex flex-col gap-3">
      <h4 className="font-fenix text-white">{title}</h4>
      <p className="text-desc text-sm">{description}</p>
      <button 
        onClick={handleButtonClick}
        className="bg-medium-slate-blue hover:bg-medium-slate-blue-dark text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <span className="material-icons">{icon}</span> 
        {buttonText}
      </button>
    </div>
  );
};

export default SidebarCard;