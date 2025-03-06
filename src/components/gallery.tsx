import Image from "next/image";

export default function Gallery() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="Singer performing"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="DJ performing"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="Basketball game"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://images.unsplash.com/photo-1569315618680-3d673b5e1514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Volleyball game"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="Crowd in purple lighting"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="Group in blue uniforms"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="Soccer game"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tv3RFumBo5WDyspfFFYTJj1SPd6FlV.png"
            alt="MTV event"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
}
