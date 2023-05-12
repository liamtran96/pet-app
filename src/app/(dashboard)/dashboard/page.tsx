import Button from "@/components/Button/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return <div>{JSON.stringify(session)}</div>;
}
