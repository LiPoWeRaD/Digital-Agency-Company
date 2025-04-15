import { useState, useRef } from 'react';

const Slider = () => {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.round(Number(e.target.value)), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Math.round(Number(e.target.value)), minValue + 1);
    setMaxValue(value);
  };

  const startDragging = (isMin: boolean, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const startX = clientX;
    const startValue = isMin ? minValue : maxValue;
    const sliderWidth = sliderRef.current?.offsetWidth || 0;

    const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
      const moveClientX = 'touches' in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const deltaX = moveClientX - startX;
      const deltaValue = Math.round((deltaX / sliderWidth) * 100);
      
      if (isMin) {
        const newValue = Math.min(Math.max(0, startValue + deltaValue), maxValue - 1);
        setMinValue(newValue);
      } else {
        const newValue = Math.min(Math.max(minValue + 1, startValue + deltaValue), 100);
        setMaxValue(newValue);
      }
    };

    const handleEnd = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove as EventListener);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  };

  return (
    <div className="w-full">
      <div className="relative h-8" ref={sliderRef}>
        {/* Фоновая дорожка */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-grey10 rounded-full transform -translate-y-1/2"></div>
        
        {/* Активная зона между ползунками */}
        <div 
          className="absolute top-1/2 h-2 bg-green50 rounded-full transform -translate-y-1/2"
          style={{
            left: `${minValue}%`,
            right: `${100 - maxValue}%`
          }}
        ></div>
        
        {/* Минимальный ползунок */}
        <input
          type="range"
          min="0"
          max={maxValue}
          step="1"
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full top-1/2 left-0 h-0 opacity-0 cursor-pointer z-20"
        />
        <div 
          className="absolute w-4 h-4 bg-white border-2 border-green50 rounded-full top-[70%] transform -translate-y-1/2 cursor-pointer z-30 touch-none"
          style={{ left: `${minValue}%`, transform: `translate(-50%, -50%)` }}
          onMouseDown={(e) => startDragging(true, e)}
          onTouchStart={(e) => startDragging(true, e)}
        ></div>
        <div 
          className="absolute text-xs text-grey60 z-40"
          style={{ 
            left: `${minValue}%`, 
            top: '100%',
            transform: minValue === maxValue 
              ? 'translateX(calc(-50% + 10px)) translateY(5px)' 
              : 'translateX(-50%) translateY(5px)'
          }}
        >
          ${minValue * 100}
        </div>
        
        {/* Максимальный ползунок */}
        <input
          type="range"
          min={minValue}
          max="100"
          step="1"
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full top-1/2 left-0 h-0 opacity-0 cursor-pointer z-20"
        />
        <div 
          className="absolute w-4 h-4 bg-white border-2 border-green50 rounded-full top-[70%] transform -translate-y-1/2 cursor-pointer z-30 touch-none"
          style={{ left: `${maxValue}%`, transform: `translate(-50%, -50%)` }}
          onMouseDown={(e) => startDragging(false, e)}
          onTouchStart={(e) => startDragging(false, e)}
        ></div>
        <div 
          className="absolute text-xs text-grey60 z-40"
          style={{ 
            left: `${maxValue}%`, 
            top: '100%',
            transform: minValue === maxValue 
              ? 'translateX(calc(-50% - 10px)) translateY(5px)' 
              : 'translateX(-50%) translateY(5px)'
          }}
        >
          ${maxValue * 100}
        </div>
      </div>
    </div>   
  );
}

export default Slider;