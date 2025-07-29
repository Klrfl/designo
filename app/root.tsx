import {
  data,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "@fontsource-variable/jost";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import client from "$/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import type { OfficeLocation } from "./types";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="main-grid">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export async function loader() {
  const response = await client.queries.config({
    relativePath: "config.json",
  });
  if (!response.data.config.navigation)
    throw data("bad website config", { status: 500 });

  return { response };
}

export default function App({ loaderData }: Route.ComponentProps) {
  const {
    data: { config },
  } = useTina(loaderData.response);

  const links =
    config.navigation?.map((nav) => ({
      href: nav?.navigationLink ?? "/",
      label: nav?.label ?? "",
    })) ?? [];

  const floatingCta = config.footer?.floatingCta;

  const office = {
    office: config.footer?.officeLocation?.office ?? "",
    email: config.footer?.officeLocation?.email ?? "",
    phone: config.footer?.officeLocation?.phone ?? "",
    name: config.footer?.officeLocation?.name ?? "",
    address: config.footer?.officeLocation?.address ?? "",
  } satisfies OfficeLocation;

  const socialLinks = config.footer?.socialLinks ?? [];

  const location = useLocation();
  return (
    <>
      <NavigationBar links={links} />
      <Outlet />
      <Footer
        navigationLinks={links}
        officeLocation={office}
        floatingCta={floatingCta}
        socialLinks={socialLinks}
        displayCta={location.pathname !== "/contact"}
      />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto grid place-items-center gap-4 p-4 py-12 text-center">
      <h1 className="heading-1 font-bold">{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}

      <Link reloadDocument className="btn btn-dark" to="/">
        Go back home
      </Link>
    </main>
  );
}
