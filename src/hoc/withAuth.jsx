import React from "react";
import useAuth from "../hooks/useAuth";
import RedirectToLogin from "../components/redirectToLogin/redirectToLogin";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";


const withAuth = (Component) => {
    const navigate = useNavigate();
  return (props) => {
    const { user, loading, error } = useAuth();
    if (loading) return <Loader />;
    return user ? <Component {...props} /> : <>{navigate('/login')}</>;
  };
};

export default withAuth;
