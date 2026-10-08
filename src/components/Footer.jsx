function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`text-center py-6 border-t text-sm transition ${
        darkMode
          ? "bg-black border-zinc-800 text-zinc-400"
          : "bg-gray-50 border-gray-200 text-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {currentYear} Pasula Shloka. All rights reserved.</p>
        <p className="text-xs">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;