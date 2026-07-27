import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/");
      }
    }

    checkUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome 🎉</p>
    </div>
  );
}

export default Dashboard;