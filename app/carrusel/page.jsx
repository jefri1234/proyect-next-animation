"use client"
import { ImageCarousel } from "../components/image-carrousel";

export default function Home() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
            alt: "Landscape image 1"
        },
        {
            src: "https://images.unsplash.com/photo-1728247837618-bb22bed287c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Landscape image 3"
        },
        {
            src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
            alt: "Landscape image 3"
        },
        {
            src: "https://images.unsplash.com/photo-1737587653765-94bc8fe7b541?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Landscape image 4"
        },
        {
            src: "https://images.unsplash.com/photo-1737587659099-ac368b02316f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Landscape image 5"
        },

    ];

    return (
        <main className="min-h-screen">
            {/* You can adjust the height prop to change the carousel height */}
            <ImageCarousel
                images={images}
                height={500}
                className="mb-8"
            />

            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold">No Dejes que la vida de viva vive la vida</h1>
                <p className="mt-4 text-gray-600">
                    Explora uno de los mejores lugares del territorio Peruano, donde puedes encontrar mucha adrenalina, diversion cuentas con personas guias y movilidad para que puedas disfrutar de la mejor experiencia de tu vida.
                </p>
            </div>
        </main>
    );
}