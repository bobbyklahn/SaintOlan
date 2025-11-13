export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-ocean-blue via-black to-ocean-light flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif gradient-text mb-4">404</h1>
        <p className="text-cream/80 text-xl">Page not found</p>
        <a href="/" className="mt-8 inline-block px-8 py-3 glass rounded-full text-gold border border-gold/30 hover:bg-gold/10 transition-all">
          Return Home
        </a>
      </div>
    </div>
  );
}
