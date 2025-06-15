export function Button({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#F47920] text-white px-4 py-2 rounded-2xl shadow hover:bg-orange-600"
    >
      {children}
    </a>
  );
}
