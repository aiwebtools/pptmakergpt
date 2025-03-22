
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col items-center justify-center p-6 bg-grid">
      <div className="cyber-card p-8 rounded-lg max-w-md w-full text-center animate-slide-up">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full cyber-card flex items-center justify-center">
          <span className="text-4xl font-bold text-cyber-blue">404</span>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
        
        <p className="text-white/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </a>
          
          <a 
            href="/" 
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-cyber-blue text-cyber-black font-medium transition-all duration-300 hover:brightness-110"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home Page</span>
          </a>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyber-red/5 blur-[100px] pointer-events-none" />
    </div>
  );
};

export default NotFound;
