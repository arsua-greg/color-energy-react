import { useUser } from "@auth0/nextjs-auth0/client";
import UserInformation from "../components/UserInformation";
import { Fragment } from "react";

function TopPage() {
  const { user } = useUser();

  return (
    <Fragment>
      {user ? (
        <UserInformation />
      ) : (
        <div className="container mx-auto px-5 my-5 flex w-full items-center justify-between">
          <h1 className="text-xl font-bold">Home Page</h1>
        </div>
      )}
    </Fragment>
  );
}

export default TopPage;
