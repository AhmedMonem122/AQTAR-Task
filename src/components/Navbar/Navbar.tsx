import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300"
          >
            Products App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
