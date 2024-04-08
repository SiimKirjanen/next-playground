import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-end gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/users">Users</Link>
      <Link href="/errors">Errrors</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/photo-feed">Photos</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/client">Client</Link>
    </nav>
  );
};

export default Navigation;
