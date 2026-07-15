export default function Footer() {
  return (
    <footer className="max-w-[1180px] mx-auto px-8 py-9 pb-11 border-t border-line flex justify-between items-center flex-wrap gap-3 text-[13.5px] text-ink-soft">
      <span>© {new Date().getFullYear()} Bright Path Speech Therapy, P.C.</span>
      <span>Eastern Long Island, NY</span>
    </footer>
  );
}
