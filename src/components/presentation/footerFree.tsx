
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com/creativetim?ref=astrolaunch-ui",
  },
  {
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/creativetim?ref=astrolaunch-ui",
  },
  {
    icon: "fab fa-dribbble",
    link: "https://www.dribbble.com/creativetim?ref=astrolaunch-ui",
  },
  {
    icon: "fab fa-github",
    link: "https://www.github.com/creativetimofficial?ref=astrolaunch-ui",
  },
  {
    icon: "fab fa-discord",
    link: "https://discord.com/invite/gxtg2rJa?ref=astrolaunch-ui",
  },
];

const COMPANY = [
  {
    name: "About Us",
    link: "https://www.creative-tim.com/presentation?ref=astrolaunch-ui",
  },
  {
    name: "Blog",
    link: "https://www.creative-tim.com/blog?ref=astrolaunch-ui",
  },
  {
    name: "Github",
    link: "https://github.com/creativetimofficial?ref=astrolaunch-ui",
  },
  {
    name: "Free Products",
    link: "https://www.creative-tim.com/templates/free?ref=astrolaunch-ui",
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link: "https://www.creative-tim.com/knowledge-center?ref=astrolaunch-ui",
  },
  {
    name: "Contact Us",
    link: "https://www.creative-tim.com/contact-us?ref=astrolaunch-ui",
  },
  {
    name: "Premium Support",
    link: "https://www.creative-tim.com/support-terms?ref=astrolaunch-ui",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link: "https://www.creative-tim.com/learning-lab/astro/overview/astro-launch-ui?ref=astrolaunch-ui",
  },
  {
    name: "Custom Development",
    link: "https://www.creative-tim.com/services/updivision?ref=astrolaunch-ui",
  },
  {
    name: "Discord",
    link: "https://discord.gg/WCvQWMwT",
  },
  {
    name: "Tailwind Components",
    link: "https://tailwindcomponents.com/?ref=astrolaunch-ui",
  },
];

const TECHS = [
  {
    name: "React",
    link: "#",
  },
  {
    name: "Astro",
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              AstroLaunch UI
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              Easy to use for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Tehnologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
           
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                AstroLaunch UI
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com?ref=astroLaunch-ui"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Creative Tim. Made with ❤️ for a better web.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
