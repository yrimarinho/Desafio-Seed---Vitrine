import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex gap-6 font-medium text-gray-300">
                <Link href="/" className="text-gray-300 hover:text-green-300">
                    Inicio
                </Link>
                <Link href="/explorar" className="text-gray-300 hover:text-green-300">
                    Explorar
                </Link>
            </div>
        </nav>
    );
}