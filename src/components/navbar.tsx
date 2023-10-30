import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-slate-950 text-gray-50 p-2 border-b-2 border-black">
            <Link className="ml-4 font-semibold" href="/">Home</Link>
            <Link className="ml-4 font-semibold" href="/about">About</Link>
        </div>
    );
}
