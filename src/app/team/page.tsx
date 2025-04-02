import { Navbar } from "@/components/navbar";

export default function TeamPage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Navbar */}
      <Navbar />
      <div>
        {/*Bhushith 
        Hanish
        Sonith
        Shivani
        Aditya
        Akash
        Harsha
        Varsha 
        */}
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8"></div>
    </div>
  );
}
