import Link from "next/link";
import { authSession } from "@/libraries/authSession";
import Image from "next/image";

export const UserAuth = async () => {
  const user = await authSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between w-40 items-center mr-3">
      <Link href={actionURL} className="border-2 border-main-secondary shadow-lg rounded-lg px-2 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
        {actionLabel}
      </Link>
      {user ? 
      <Link href="/user/dashboard">
        <div className="w-10 h-10 overflow-hidden rounded-2xl drop-shadow-lg shadow-lg">
        <Image src={user.image} width={350} height={350} alt="..." priority className="w-full hover:scale-105 transition-all duration-500"/>
        </div>
      </Link> : null}
    </div>
  );
};
export default UserAuth;
