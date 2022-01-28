import Head from "next/head";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { GitHub, Gitlab, Linkedin, Twitter, Youtube } from "react-feather";

const LINKS = [];

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/lukahartwig",
    icon: GitHub,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/lukahartwig",
    icon: Gitlab,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCBfOLc7N_IwPkYWBTmJqokQ",
    icon: Youtube,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/lukahartwig",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lukahartwig/",
    icon: Linkedin,
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Luka Hartwig</title>
      </Head>

      <Transition className="h-full" appear show>
        <div className="relative top-1/2 left-1/2 inline-block -translate-x-1/2 -translate-y-1/2">
          <Transition.Child
            enter="transition-all duration-1000"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <nav>
              <ul className="absolute left-1/2 -top-12 flex -translate-x-1/2 space-x-12 text-xl text-rose-400">
                {LINKS.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to}>
                      <a className="transition-colors duration-300 hover:text-rose-200">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Transition.Child>
          <div className="py-4 text-center md:px-32">
            <Transition.Child
              enter="transition-all duration-1000"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <h1 className="mb-4 text-3xl font-light leading-relaxed text-rose-300 md:mb-8 md:text-6xl">
                Hello, I&apos;m{" "}
                <span className="font-bold text-rose-200">Luka Hartwig</span>
              </h1>
            </Transition.Child>
            <Transition.Child
              enter="transition-all duration-1000 delay-200"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <small className="text-base text-rose-200">
                Web Development / Site Reliability Engineering / Observability /
                Data
              </small>
            </Transition.Child>
          </div>
        </div>
        <Transition.Child
          className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0"
          enter="transition-all duration-1000"
          enterFrom="opacity-0 -translate-x-4"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex space-x-6">
            {SOCIALS.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a href={href} rel="noreferrer" target="_blank" title={name}>
                  <Icon
                    className="text-rose-300"
                    aria-hidden
                    focusable={false}
                  />
                  <span className="sr-only">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </Transition.Child>
      </Transition>
    </>
  );
}
