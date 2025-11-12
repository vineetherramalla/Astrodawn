const CosmicParticles = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated cosmic stars */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>
      
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        .stars-layer-1,
        .stars-layer-2,
        .stars-layer-3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center;
        }
        
        .stars-layer-1 {
          background-image: 
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent);
          background-size: 200% 200%;
          animation: twinkle 3s ease-in-out infinite, float 20s linear infinite;
          opacity: 0.4;
        }
        
        .stars-layer-2 {
          background-image: 
            radial-gradient(1px 1px at 10% 20%, #06aed5, transparent),
            radial-gradient(1px 1px at 40% 60%, #06aed5, transparent),
            radial-gradient(2px 2px at 70% 40%, #06aed5, transparent),
            radial-gradient(1px 1px at 85% 80%, #06aed5, transparent);
          background-size: 250% 250%;
          animation: twinkle 4s ease-in-out infinite 1s, float 25s linear infinite reverse;
          opacity: 0.3;
        }
        
        .stars-layer-3 {
          background-image: 
            radial-gradient(1px 1px at 25% 45%, #f0c808, transparent),
            radial-gradient(2px 2px at 55% 15%, #f0c808, transparent),
            radial-gradient(1px 1px at 75% 85%, #f0c808, transparent),
            radial-gradient(1px 1px at 15% 75%, #f0c808, transparent);
          background-size: 300% 300%;
          animation: twinkle 5s ease-in-out infinite 2s, float 30s linear infinite;
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default CosmicParticles;
