import type { ReactNode } from "react";

import ogImage from "@/images/og.png";
import globalStyle from "@/styles/globals.css?url";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";

import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NotFound } from "@/components/NotFound";
import { ScreenSize } from "@/components/screen-size";
// import calSansWoff2 from "cal-sans/fonts/webfonts/CalSans-SemiBold.woff2";
import { ThemeProvider } from "@/components/theme-provider";
import { seo } from "@/lib/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
      ...seo({
        title: "TanStack Start Blog Starter",
        description: "A blog starter template built using TanStack Start",
        image: ogImage,
        keywords:
          "tanstack,react,reactjs,,open source,open source software,oss,software, blog, starter, tanstack start, tailwind",
      }),
    ],
    links: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: globalStyle,
      },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
        <ThemeProvider>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 min-h-screen">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <ScreenSize />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
