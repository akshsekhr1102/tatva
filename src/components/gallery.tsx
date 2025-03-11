import Image from "next/image";

export default function Gallery() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAwjPvPeBzr3Xm6ekJ0KNG51sqTaHyEit4UDCL"
            alt="Singer performing"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSA8FSXoOykUsCM2h6GHmpeRxOyVEvTioSDWz50"
            alt="DJ performing"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAPnTj4ZhHY0NQjtgd6sIa2Jn14MH39bwWFDku"
            alt="Basketball game"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAHg3CdSW1WqU7kIVBg36iphTJn2lyDAbKuxjf"
            alt="Volleyball game"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAOJQ60DxlM89G0fsIvjSHpyqVBzDiNF3wcT1k"
            alt="Crowd in purple lighting"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAVMih9QKjrGSe02nmHWkXacIFo57wdZgQJDpK"
            alt="Group in blue uniforms"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAsilvcDGjS5t36ceUpXEmQqArv2zhyofJLV9d"
            alt="Soccer game"
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
          <Image
            src="https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSArOXssq1cyEFbTuBhAXsg0IHa5ZGwc9oxmN2d"
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
