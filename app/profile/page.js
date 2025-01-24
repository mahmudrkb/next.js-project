import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <div className=" mt-10 flex justify-center items-center h-screen">
        <h1 className="text-md ">Welcome to Profile</h1>
        <h3 className="text-xl ">This is me {user?.given_name} </h3>
      </div>
    </div>
  );
}
