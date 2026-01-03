import { Logo } from "@/assets/svgs";
import { NAVBAR_LINKS } from "@/data/navbar.data";

export const Navbar = () => {
  return (
    <nav className="mx-auto mt-6 w-[calc(100%-3rem)] max-w-5xl">
      <div className="flex items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-[0_1px_3px_0_rgba(12,12,13,0.05)] backdrop-blur">
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

        <button className="rounded-full bg-[#007AFF] px-4 py-2 text-sm font-medium text-white transition">
          Contact Sales
        </button>
      </div>
    </nav>
  );
};
