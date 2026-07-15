// "use client";

// import { useState } from "react";

// const links = [
//   { href: "#about", label: "About" },
//   { href: "#services", label: "Services" },
//   { href: "#area", label: "Service Area" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Nav() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line">
//       <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-8 py-[18px]">
//         <a href="#top" className="flex items-center gap-2.5 font-display font-semibold text-xl">
//           <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="shrink-0">
//             <circle cx="15" cy="15" r="15" fill="#DCE7DA" />
//             <path
//               d="M8 15c0-3 1.5-5 2.5-5s1.5 4 2.5 4 1-6 2.5-6 1.5 8 2.5 8 1-3 2.5-3 1.5 2 2.5 2"
//               stroke="#CC5A38"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               fill="none"
//             />
//           </svg>
//           Bright Path
//         </a>

//         <div className="hidden md:flex gap-9 items-center text-[15px] font-medium">
//           {links.map((l) => (
//             <a key={l.href} href={l.href} className="text-ink-soft hover:text-coral-deep transition-colors">
//               {l.label}
//             </a>
//           ))}
//         </div>

//         <div className="flex items-center gap-4">
//           <a href="#contact" className="btn btn-primary !px-[22px] !py-[11px] !text-sm hidden sm:inline-flex">
//             Book a consult
//           </a>
//           <button
//             className="md:hidden p-1.5"
//             aria-label="Toggle menu"
//             onClick={() => setOpen((v) => !v)}
//           >
//             <span className="block w-6 h-0.5 bg-ink my-1.5 rounded-full" />
//             <span className="block w-6 h-0.5 bg-ink my-1.5 rounded-full" />
//             <span className="block w-6 h-0.5 bg-ink my-1.5 rounded-full" />
//           </button>
//         </div>
//       </nav>

//       {open && (
//         <div className="md:hidden flex flex-col gap-5 px-8 py-6 border-t border-line bg-paper">
//           {links.map((l) => (
//             <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-soft text-[15px] font-medium">
//               {l.label}
//             </a>
//           ))}
//           <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-fit">
//             Book a consult
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#area", label: "Where We Serve" },
  { href: "#contact", label: "Get In Touch" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-5">
        {/* Logo */}
        {/* <a href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#CC5A38" />
            <path
              d="M10 16C10 12.7 12.7 10 16 10C19.3 10 22 12.7 22 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-2xl font-serif font-bold text-ink">
            Bright Path
          </span>
        </a>
        <a href="/" className="text-2xl font-serif font-bold text-ink">
          Bright Path
        </a> */}

        <a
          href="#top"
          className="flex items-center gap-2.5 font-display font-semibold text-xl"
        >
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="shrink-0"
          >
            <circle cx="15" cy="15" r="15" fill="#DCE7DA" />{" "}
            <path
              d="M8 15c0-3 1.5-5 2.5-5s1.5 4 2.5 4 1-6 2.5-6 1.5 8 2.5 8 1-3 2.5-3 1.5 2 2.5 2"
              stroke="#CC5A38"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          Bright Path
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-9 items-center text-[15px] font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft hover:text-coral-deep transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="btn btn-primary !px-[22px] !py-[11px] !text-sm hidden sm:inline-flex"
          >
            Schedule a Visit
          </a>

          <button
            className="md:hidden p-1.5"
            aria-label="Open navigation menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="block w-6 h-0.5 bg-ink my-1.5 rounded-full" />
            <span className="block w-6 h-0.5 bg-ink my-1.5 rounded-full" />
            <span className="block w-6 h-0.5 bg-ink my-1.5 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-5 px-8 py-6 border-t border-line bg-paper">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink-soft text-[15px] font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary w-fit"
          >
            Schedule a Visit
          </a>
        </div>
      )}
    </header>
  );
}
