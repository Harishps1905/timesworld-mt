import { useEffect, useState } from'react';
import { getAuth, onAuthStateChanged } from'firebase/auth';
import { app } from'../firebase/firebase';

const useAuth = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    }, (err) => {
      setError(err);
      setLoading(false);
    });

    return() =>unsubscribe(); // Clean up subscription on unmount
  }, []);

  return { user, loading, error };
};

export default useAuth;
