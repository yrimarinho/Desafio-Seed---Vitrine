import Link from "next/link";

export default function Home() {
    return (
        <main 
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gray-100
                px-6
                bg-center
            "
            style={{backgroundImage: "url('/Portal.jpg')",}}
        >
            <section className="
                max-w-3xl
                w-full
                text-center
                bg-white
                rounded-2xl
                shadow-lg
                p-10
                md:p-14
            ">

                <p className="
                    text-green-500
                    font-semibold
                    uppercase
                    tracking-widest
                    text-sm
                    mb-4
                ">
                    Cidadela Hub
                </p>

                <h1 className="
                    text-4xl
                    md:text-6xl
                    font-bold
                    text-gray-800
                    mb-6
                ">
                    Conheça os personagens de
                    <span className="text-green-500"> Rick & Morty</span>
                </h1>

                <p className="
                    text-lg
                    md:text-xl
                    text-gray-500
                    leading-relaxed
                    mb-8
                ">
                    Explore os personagens da série, descubra suas
                    características e encontre seus favoritos através
                    da busca.
                </p>

                <Link
                    href="/explorar"
                    className="
                        inline-block
                        px-6
                        py-3
                        rounded-lg
                        bg-green-500
                        text-white
                        font-semibold
                        shadow-md
                        hover:bg-green-600
                        hover:shadow-lg
                        transition
                    "
                >
                    Explorar personagens
                </Link>

            </section>
        </main>
    );
}
