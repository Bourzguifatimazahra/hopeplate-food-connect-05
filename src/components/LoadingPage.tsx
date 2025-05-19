
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const LoadingPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalDuration = 10000; // 10 seconds in milliseconds
    const interval = 100; // Update progress every 100ms
    const steps = totalDuration / interval;
    const incrementValue = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += incrementValue;
      setLoadingProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        navigate('/main');
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="w-40 h-40 relative mb-8">
          <img 
            src="/lovable-uploads/328fef81-1031-4394-ba30-a2eef2f006f6.png" 
            alt="HopEplate Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Loading animation */}
        <LoaderCircle className="animate-spin text-lime h-12 w-12 mb-4" />
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-lime transition-all duration-100 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-4">
          Chargement en cours... {Math.round(loadingProgress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
