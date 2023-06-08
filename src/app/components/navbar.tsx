import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex flex-row flex-nowrap content-center justify-evenly items-center">
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/about/us">About Us</Link>
      <Link href="/about/someone">About Someone Else</Link>
      <Link href="/listofposts">Posts</Link>
    </div>
  );
}
