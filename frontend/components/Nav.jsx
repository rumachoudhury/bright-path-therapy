"use client";

import Link from "next/link";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#area", label: "Where We Serve" },
  { href: "#contact", label: "Get In Touch" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <header
      className="bg-white 
border-b
text-gray-900
dark:bg-slate-900
dark:text-white
dark:border-slate-700"
    >
      <nav className="flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-display font-semibold text-xl"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="shrink-0"
          >
            <circle cx="15" cy="15" r="15" fill="#DCE7DA" />

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
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-9 items-center text-[15px] font-medium border p-4 rounded-full">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft hover:text-coral-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Admin Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAdminOpen(!adminOpen)}
              className="flex items-center gap-1 text-ink-soft hover:text-coral-deep transition-colors"
            >
              Open Admin
              <ChevronDown size={16} />
            </button>

            {adminOpen && (
              <div className="absolute right-0 top-8 w-48 bg-white border rounded-lg shadow-lg z-50">
                <Link
                  href="/admin"
                  onClick={() => setAdminOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <Link
                  href="/admin/contacts"
                  onClick={() => setAdminOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Contacts
                </Link>

                <Link
                  href="/admin/appointments"
                  onClick={() => setAdminOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Appointments
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="btn btn-primary !px-[22px] !py-[11px] !text-sm hidden sm:inline-flex"
          >
            Schedule a Visit
          </Link>

          {/* Mobile Button */}
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink-soft text-[15px] font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Admin Links */}
          <div className="flex flex-col gap-3 border-t pt-4">
            <p className="font-semibold">Admin</p>

            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="text-ink-soft"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/contacts"
              onClick={() => setOpen(false)}
              className="text-ink-soft"
            >
              Contacts
            </Link>

            <Link
              href="/admin/appointments"
              onClick={() => setOpen(false)}
              className="text-ink-soft"
            >
              Appointments
            </Link>
          </div>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary w-fit"
          >
            Schedule a Visit
          </Link>

          <div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md"
            >
              <Sun className="dark:hidden" />
              <Moon className="hidden dark:block" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
