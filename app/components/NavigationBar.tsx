import Logo from "~/assets/shared/desktop/logo-dark.png";
import Burger from "~/assets/shared/mobile/icon-hamburger.svg";
import Close from "~/assets/shared/mobile/icon-close.svg";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-lg relative group">
      <a href="#">
        <img src={Logo} className="block" width="200" alt="" />
      </a>

      <input
        type="checkbox"
        name="open-nav"
        id="open-nav"
        className="peer sr-only"
        title="toggle navigation bar"
      />

      <label
        htmlFor="open-nav"
        className="block cursor-pointer md:hidden peer-focus:bg-amber-500"
      >
        <span className="sr-only">Toggle navigation bar</span>
        <img
          src={Burger}
          className="block group-has-[input:checked]:hidden"
          width="20"
          height="20"
        />
        <img
          src={Close}
          className="hidden group-has-[input:checked]:block"
          width="20"
          height="20"
        />
      </label>

      <div className="bg-white max-[48rem]:-translate-y-full max-[48rem]:peer-checked:translate-y-12 transition-transform max-[48rem]:absolute top-0 left-0 right-0 max-[48rem]:shadow-lg">
        <ul className="flex flex-col text-right md:flex-row gap-2 md:relative peer-checked:translate-y-100">
          <li>
            <a
              className="block hover:bg-black/10 transition-[background-color] px-4 py-3"
              href="#"
            >
              Our Company
            </a>
          </li>
          <li>
            <a
              className="block hover:bg-black/10 transition-[background-color] px-4 py-3"
              href="#"
            >
              Locations
            </a>
          </li>

          <li>
            <a
              className="block hover:bg-black/10 transition-[background-color] px-4 py-3"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
