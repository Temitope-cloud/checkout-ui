import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(30); // start at 30%

  return (
    <div className="w-full mt-2">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
