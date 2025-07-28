import Logo from "~/assets/shared/desktop/logo-dark.png";
import Burger from "~/assets/shared/mobile/icon-hamburger.svg";
import Close from "~/assets/shared/mobile/icon-close.svg";
import { Link } from "react-router";

interface Props {
  links: {
    href: string;
    label: string;
  }[];
}

export default function NavigationBar({ links }: Props) {
  return (
    <nav className="group relative flex items-center justify-between bg-white px-6 py-4">
      <Link to="/" viewTransition>
        <img src={Logo} className="block" width="200" alt="" />
      </Link>

      <input
        type="checkbox"
        name="open-nav"
        id="open-nav"
        className="peer sr-only"
        title="toggle navigation bar"
      />

      <label
        htmlFor="open-nav"
        className="block cursor-pointer peer-focus-visible:bg-amber-500 md:hidden"
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

      <div className="top-0 right-0 left-0 z-10 bg-white transition-transform max-[48rem]:absolute max-[48rem]:-translate-y-full max-[48rem]:shadow-lg max-[48rem]:peer-checked:translate-y-12">
        <ul className="flex flex-col gap-2 text-right peer-checked:translate-y-100 md:relative md:flex-row">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                className="block px-4 py-3 text-sm leading-tight tracking-[2px] uppercase transition-[background-color] hover:underline"
                to={l.href}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
