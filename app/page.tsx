import { GitHub, Linkedin, Twitter, Youtube } from "react-feather";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/lukahartwig",
    icon: GitHub,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@lukahartwig",
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

const TAGS = [
  "Web Development",
  "Site Reliability Engineering",
  "Observability",
  "Data",
];

export default function HomePage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="my-4 md:my-8 text-center md:px-32">
          <h1 className="text-4xl font-extrabold leading-relaxed md:text-6xl lg:text-8xl md:mb-8">
            Hello, I&apos;m
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-rose-400 bg-clip-text text-transparent">
              Luka&nbsp;Hartwig
            </span>
          </h1>
          <sub className="hidden text-base text-gray-400 md:block">
            {TAGS.join(" / ")}
          </sub>
        </div>
        <ul className="flex space-x-8 text-gray-400">
          {SOCIALS.map(({ name, icon: Icon, href }) => (
            <li key={name}>
              <a href={href} rel="noreferrer" target="_blank" title={name}>
                <Icon
                  aria-hidden
                  focusable={false}
                  className="transition-colors duration-300 hover:text-white"
                />
                <span className="sr-only">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
