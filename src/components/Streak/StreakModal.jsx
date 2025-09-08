import React from "react";

const StreakModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const weekDays = ['T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'];
  const streakData = [false, false, false, false, true, true, false, false, false];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-16 right-4 sm:right-7 lg:right-10 z-50 w-80 max-w-sm">
        <div 
          className="rounded-2xl p-6 border shadow-2xl"
          style={{
            backgroundColor: "var(--navbar-bg)",
            borderColor: "var(--navbar-border)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="material-icons text-3xl" style={{ color: "var(--pinkish)" }}>
                local_fire_department
              </span>
              <div>
                <h3 className="font-fenix text-xl text-white">Streak</h3>
              </div>
            </div>
          </div>

          {/* Streak Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm text-columbia-blue">Current streak</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="text-3xl font-bold text-white">2</span>
                <span className="material-icons text-lg" style={{ color: "var(--pinkish)" }}>
                  emoji_events
                </span>
              </div>
              <div className="text-sm text-columbia-blue">Longest streak</div>
            </div>
          </div>

          {/* Week Calendar */}
          <div className="flex justify-between items-center mb-4">
            {weekDays.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-xs text-columbia-blue font-medium">{day}</div>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    streakData[index] 
                      ? 'bg-medium-slate-blue' 
                      : 'bg-gray-700'
                  }`}
                >
                  {streakData[index] && (
                    <span className="material-icons text-sm text-white">
                      check
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Motivation Text */}
          <div className="text-center mt-4">
            <p className="text-sm text-columbia-blue">
              Keep reading to maintain your streak! 🔥
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreakModal;