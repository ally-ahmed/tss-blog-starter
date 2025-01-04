// app/routes/__root.tsx
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import globalStyle from "@/styles/globals.css?url";
import mdxStyle from "@/styles/globals.css?url";
import fontsourceInter from "@fontsource-variable/inter?url";
import calSans from "cal-sans?url";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { seo } from "@/lib/seo";
import { ScreenSize } from "@/components/screen-size";
import ogImage from "@/images/og.png";

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
        title: "Tanstack Start Starter",
      },
      ...seo({
        title: "Tanstack Start Blog Starter",
        description: "A blog starter template built using Tanstack Start",
        image: ogImage,
        keywords:
          "tanstack,react,reactjs,,open source,open source software,oss,software, blog, starter, tanstack start, tailwind",
      }),
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalStyle,
      },
      {
        rel: "stylesheet",
        href: mdxStyle,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter,
      },
      {
        rel: "stylesheet",
        href: calSans,
      },
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
      <body className="min-h-screen bg-background font-sans antialiased max-w-xl mx-4 mt-8 lg:mx-auto vsc-initialized">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
        <ScreenSize />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
