import { useAuthStore } from "@/stores/authStore";

export default function Profile() {
  const user = useAuthStore((s) => s.user);
  return <p>{user?.email + " " + user?.name}</p>;
}
