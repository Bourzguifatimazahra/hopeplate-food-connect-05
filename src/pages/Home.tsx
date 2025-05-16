
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main page immediately
    navigate('/main');
  }, [navigate]);

  return null;
};

export default Home;
