import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const LoadingPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show logo with fade-in animation
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    
    const totalDuration = 5000; // 5 seconds in milliseconds
    const interval = 50; // Update progress every 50ms
    const steps = totalDuration / interval;
    const incrementValue = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += incrementValue;
      setLoadingProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        // Small delay before navigation for smooth transition
        setTimeout(() => navigate('/main'), 300);
      }
    }, interval);
    
    return () => {
      clearInterval(timer);
      clearTimeout(logoTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      
      {/* Animated circles in background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="flex flex-col items-center gap-8 z-10">
        {/* Logo with animation */}
        <div className={`w-48 h-48 relative mb-8 transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="absolute inset-0 bg-lime/20 rounded-full blur-xl animate-pulse"></div>
          <img 
            src="/hopeplatelogo.png" 
            alt="HopEplate Logo" 
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
          />
        </div>
        
        {/* App name */}
        <h1 className={`text-4xl font-bold text-lime mb-2 transition-all duration-1000 delay-200 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          HopEplate
        </h1>
        
        {/* Loading animation */}
        <LoaderCircle className={`animate-spin text-lime h-12 w-12 mb-4 transition-all duration-1000 delay-300 ${showLogo ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Progress bar container */}
        <div className={`w-64 h-2 bg-gray-800 rounded-full overflow-hidden transition-all duration-1000 delay-500 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="h-full bg-gradient-to-r from-lime to-lime/80 transition-all duration-100 ease-out rounded-full"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        
        {/* Progress text */}
        <p className={`text-center text-sm text-gray-400 mt-2 transition-all duration-1000 delay-700 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
          Chargement en cours... {Math.round(loadingProgress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
