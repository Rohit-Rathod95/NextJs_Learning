import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/education">Education</Link></li>
      </ul>
      <hr />
    </nav>
  );
}