
import React from 'react';

interface ButterflyLogoProps {
  className?: string;
  size?: number;
}

const ButterflyLogo: React.FC<ButterflyLogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Antennae */}
        <path d="M48 35 Q40 20 35 25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M52 35 Q60 20 65 25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Body */}
        <ellipse cx="50" cy="55" rx="3" ry="20" fill="#111827" />

        {/* Left Wing Upper */}
        <path
          className="butterfly-wing"
          d="M48 50 C20 15, 5 40, 15 65 C25 90, 48 70, 48 50 Z"
          fill="#D4567D"
          style={{ animation: 'butterfly-flap-left 2.5s ease-in-out infinite' }}
        />
        
        {/* Right Wing Upper */}
        <path
          className="butterfly-wing"
          d="M52 50 C80 15, 95 40, 85 65 C75 90, 52 70, 52 50 Z"
          fill="#D4567D"
          style={{ animation: 'butterfly-flap-right 2.5s ease-in-out infinite' }}
        />

        {/* Decorative Details on Wings */}
        <circle cx="30" cy="45" r="2" fill="white" opacity="0.3" />
        <circle cx="70" cy="45" r="2" fill="white" opacity="0.3" />
      </svg>
      <style>{`
        @keyframes butterfly-flap-left {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.4) skewY(5deg); }
        }
        @keyframes butterfly-flap-right {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.4) skewY(-5deg); }
        }
      `}</style>
    </div>
  );
};

export default ButterflyLogo;
