import { Logo } from "@/assets/svgs";
import { NAVBAR_LINKS } from "@/data/navbar.data";

export const Navbar = () => {
  return (
    <nav className="mx-auto mt-3 md:mt-6 w-[calc(100%-1.5rem)] md:w-[calc(100%-3rem)] max-w-5xl">
      <div className="flex items-center justify-between rounded-full bg-white/90 px-4 md:px-6 py-3 shadow-[0_1px_3px_0_rgba(12,12,13,0.05)] backdrop-blur">
        <div className="flex items-center gap-2 font-semibold">
          <Logo />
        </div>

        <div className="hidden items-center gap-8 text-[16px] text-[#8c97a8] md:flex">
            {NAVBAR_LINKS.map((link) => (
              <a
                key={link.name}
                className="transition hover:text-slate-900"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
        </div>

        <button className="relative rounded-full bg-[#007AFF] px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group">
          <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#007AFF]">
            Contact Sales
          </span>
          <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
        </button>
      </div>
    </nav>
  );
};
