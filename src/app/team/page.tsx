import { Navbar } from "@/components/navbar";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen w-full flex flex-col items-center   bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-800  to-[#1c1c1d] "
      >
        <Navbar />
      </div>
    </div>
  );
}
