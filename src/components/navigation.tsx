import Logo from "../assets/logo.svg";

export default function Navigation() {
  return (
    <nav className="bg-black px-12 py-6 rounded-b-md flex items-center justify-between">
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
