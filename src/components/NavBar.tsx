import { Fragment, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "@/data/socials";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Transition, Dialog } from "@headlessui/react";

const navLinks = [
  {
    label: "Home",
    href: "/",
    isExternal: false,
  },
  {
    label: "Kard",
    href: "https://kardxp.com/stephenirl",
    isExternal: true,
  },
  {
    label: "Dark Server",
    href: "https://privateplayer.superstreamsystem.com/private_stream",
    isExternal: true,
  },
  {
    label: "Tip Jar",
    href: "https://streamelements.com/stephenirl-7921/tip",
    isExternal: true,
  },
];

export const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full p-5 bg-dark  border-b border-slate-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex gap-20 items-center">
            <img src="/images/logo.png" className="h-12" />
            <div className=" hidden lg:inline-block text-base font-bold space-x-8">
              {navLinks.map((navLink, index) =>
                navLink.isExternal ? (
                  <a
                    key={index}
                    href={navLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {navLink.label}
                  </a>
                ) : (
                  <Link key={index} href={navLink.href}>
                    {navLink.label}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="hidden lg:flex gap-3">
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md gap-2 border border-transparent bg-lighter p-2 text-sm font-bold text-white shadow-sm"
              >
                <FontAwesomeIcon icon={socialLink.icon} />
              </a>
            ))}
          </div>
          <span className="lg:hidden" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="text-3xl text-white"
            />
          </span>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-lighter py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium">
                            <img src="/images/logo.png" className="h-7" />
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md text-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>X
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-10 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6 flex flex-col space-y-5 text-base font-bold">
                          {navLinks.map((navLink, index) =>
                            navLink.isExternal ? (
                              <a
                                key={index}
                                href={navLink.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {navLink.label}
                              </a>
                            ) : (
                              <Link
                                key={index}
                                href={navLink.href}
                                onClick={() => setOpen(false)}
                              >
                                {navLink.label}
                              </Link>
                            )
                          )}
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
