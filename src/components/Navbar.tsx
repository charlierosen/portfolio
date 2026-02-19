import Link from 'next/link';


export default function Navbar() {
return (
  <nav>
    <Link className="nav-brand" href="/">Charlie Rosen</Link>
    <div className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </div>
  </nav>
);
}
