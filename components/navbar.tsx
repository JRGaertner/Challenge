import Link from "next/link";

export default function Layout() {
  return (
    <div className='navbar'>
      <Link href='/'>Home</Link>
      <Link href='/Page2'>Picture</Link>
      <Link href='/Page3'>Form</Link>
    </div>
  )
}