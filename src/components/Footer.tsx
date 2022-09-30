import { socialLinks } from "@/data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center gap-3 lg:gap-10 mb-14">
          {socialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md gap-2 border border-transparent bg-lighter p-3 text-sm font-bold text-white shadow-sm"
            >
              <FontAwesomeIcon icon={socialLink.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
      <footer className="text-center bg-dark text-white py-5">
        <span className="text-base text-sm font-medium">
          Copyright &copy; {new Date().getFullYear()} | StephenIRL
        </span>
      </footer>
    </>
  );
};
