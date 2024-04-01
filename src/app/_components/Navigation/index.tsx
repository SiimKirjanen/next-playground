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
    </nav>
  );
};

export default Navigation;
