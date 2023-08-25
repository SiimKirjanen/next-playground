import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex justify-end gap-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/users">Users</Link>
    </nav>
  );
};

export default Navigation;