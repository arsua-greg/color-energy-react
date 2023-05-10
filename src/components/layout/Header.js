import LoginButton from "../LoginButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import Logoutbutton from "../LogoutButton";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="container mx-auto pt-3">
      <nav className="flex justify-between items-center">
        <h1>Logo</h1>
        <div>{user ? <Logoutbutton /> : <LoginButton />}</div>
      </nav>
    </header>
  );
}
