export default function NavigationBar() {
  return (
    <nav className="flex justify-between">
      <a href="#">
        <img src="" alt="" />
      </a>

      <ul className="flex gap-2">
        <li>Our Company</li>
        <li>
          <a href="#">Locations</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
