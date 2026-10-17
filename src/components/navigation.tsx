import Logo from "../assets/logo.svg";

export default function Navigation() {
  return (
    <nav className="bg-black px-4 md:px-8 lg:px-12 py-4 md:py-6 rounded-b-md flex items-center justify-between">
      <img src={Logo} alt="Logo" className="" />

      <ul className="flex items-center gap-4">
        <li>
          <a
            href="#contato"
            className="text-sm md:text-base text-gray hover:text-white transition-colors duration-200"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
