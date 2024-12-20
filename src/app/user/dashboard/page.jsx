import { authSession } from "@/libraries/authSession";
import Image from "next/image";
import Link from "next/link";

export const Page = async () => {
  const user = await authSession();

  return (
    <>
      {user ? (
        <div className="flex justify-around items-center min-h-screen">
            <Link href='/user/dashboard/collection' className="text-main-accent border-2 border-main-accent p-2 rounded-lg bg-main-shadow text-lg font-bold shadow-lg">Collection</Link>
          <div className="rounded-lg">
            <h1 className="text-main-accent font-bold text-xl text-center p-5">
              {user.name}
            </h1>
            <Image
              src={user.image}
              width={350}
              height={350}
              alt="..."
              className="w-full border-2 border-main-accent rounded-lg shadow-lg mb-9"
              priority
              />
          </div>
          <Link href='/user/dashboard/comment' className="text-main-accent border-2 border-main-accent p-2 rounded-lg bg-main-shadow text-lg font-bold shadow-lg">Comment</Link>
        </div>
      ) : null}
    </>
  );
};
export default Page;
