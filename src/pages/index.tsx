import { useUser } from "@auth0/nextjs-auth0/client";
import LoginButton from "../components/LoginButton";
import UserInformation from "../components/UserInformation";

function TopPage() {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <UserInformation />
      ) : (
        <div className="container mx-auto px-5 my-5 flex w-full items-center justify-between">
          <h1 className="text-xl font-bold">Home Page</h1>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default TopPage;
