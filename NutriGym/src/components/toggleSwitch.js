import { useState, useEffect } from 'react';

const ToggleSwitch = ({ defaultState, onToggle }) => {
  const [isOn, setIsOn] = useState(defaultState);

  useEffect(() => {
    setIsOn(defaultState);
  }, [defaultState]);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div className="flex items-center">
      <div 
        onClick={handleToggle} 
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-400' : 'bg-red-400'}`}
      >
        <div 
          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
