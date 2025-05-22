
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found.</p>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a href="/" className="bg-primary hover:bg-brand-orange-dark text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow-md transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
