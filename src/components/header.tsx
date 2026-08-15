import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-800 shadow-md">
            <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Nome da aplicação */}
                    <Link
                        href="/"
                        className="
                            text-2xl
                            font-bold
                            text-green-400
                            hover:text-green-300
                            transition
                        "
                    >
                        Rick & Morty
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/"
                            className="
                                px-4 py-2
                                rounded-lg
                                text-gray-300
                                font-medium
                                hover:bg-gray-700
                                hover:text-green-300
                                transition
                            "
                        >
                            Início
                        </Link>

                        <Link
                            href="/explorar"
                            className="
                                px-4 py-2
                                rounded-lg
                                text-gray-300
                                font-medium
                                hover:bg-gray-700
                                hover:text-green-300
                                transition
                            "
                        >
                            Explorar
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}