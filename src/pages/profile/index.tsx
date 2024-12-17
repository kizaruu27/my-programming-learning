import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data }: any = useSession();

  return (
    <div>
      <h1>Profile</h1>
      {data && <p>Username: {data && data.user.username}</p>}
    </div>
  );
}
