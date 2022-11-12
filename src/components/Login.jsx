import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogoutButton";
import AgendaButton from "./login/AgendaButton";
import Profile from "./login/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>;
  }
  return (
    <div>
      <h1>Contacts</h1>
      <Profile />

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <AgendaButton />
    </div>
  );
}

export default Login;
