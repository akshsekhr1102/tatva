export default function ShinyRedButton(props: React.PropsWithChildren) {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#330b0b] to-[#8a2020] shadow-[0px_0px_12px_#ff4545]">
      <div className="absolute inset-0">
        <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute border inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(255,69,69,.7)_inset] rounded-lg"></div>
      </div>
      <span className="text-white">{props.children}</span>
    </button>
  );
}
