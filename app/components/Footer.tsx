import DesignoLight from "~/assets/shared/desktop/logo-light.png";
import LogoFacebook from "~/assets/shared/desktop/icon-facebook.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-primary text-white px-16 py-12 rounded-xl translate-y-1/6 col-[main] flex flex-col items-center justify-between lg:flex-row">
        <div className="text-center lg:text-left max-w-prose">
          <h2 className="heading-2 text-balance">
            Let’s talk about your project
          </h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <button className="bg-white px-6 py-4 rounded-lg uppercase tracking-[1px] text-black">
          Get in touch
        </button>
      </div>

      <footer className="bg-secondary text-white/50 text-center lg:text-left pt-32 pb-24 grid grid-cols-subgrid col-[full] gap-y-8">
        <div className="col-[main] flex flex-col lg:flex-row gap-4 items-center justify-between">
          <img
            src={DesignoLight}
            className="max-w-32"
            alt="company logo"
            width="200"
            height="200"
          />

          <ul className="uppercase flex flex-col lg:flex-row gap-4 text-white">
            <li>
              <a className="leading-3 tracking-[2px] text-sm" href="#">
                Our company
              </a>
            </li>
            <li>
              <a className="leading-3 tracking-[2px] text-sm" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="leading-3 tracking-[2px] text-sm" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="col-[main] border-gray-700" />

        <div className="col-[main] lg:col-end-[span_4]">
          <p className="font-bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div className="col-[main] lg:col-span-4">
          <div className="font-bold">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </div>

        <div className="col-[main] lg:col-span-4 flex gap-4 justify-self-center lg:justify-self-end">
          <a href="#">
            <img src={LogoFacebook} />
          </a>
          <a href="#">
            <img src={LogoFacebook} />
          </a>
          <a href="#">
            <img src={LogoFacebook} />
          </a>
          <a href="#">
            <img src={LogoFacebook} />
          </a>
          <a href="#">
            <img src={LogoFacebook} />
          </a>
        </div>
      </footer>
    </>
  );
}
