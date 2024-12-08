import React from "react";
import { usePathname } from "next/navigation"

import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import {
  HomeIcon,
  SparklesIcon,
  InformationCircleIcon, ArrowTopRightOnSquareIcon, IdentificationIcon

} from "@heroicons/react/24/outline"

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "Our Product",
    icon: SparklesIcon,
    href: "/product",
  },
  {
    name: "About",
    icon: InformationCircleIcon,
    href: "/about",
  },
  {
    name: "Our Team",
    icon: IdentificationIcon,
    href: "/team",
  },
  {
    name: "Contact Us",
    icon: ArrowTopRightOnSquareIcon,
    href: "mailto: EduVision@gmail.com",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const pathname = usePathname(); // Get the current route
  const isActive = href === pathname;
  return (
      <li>
        <Typography
            as="a"
            href={href}
            target={href ? "_self" : "_blank"}
            variant="paragraph"
            color="gray"
            className={`cursor-pointer flex items-center gap-2 font-medium text-gray-900 ${
                isActive ? "text-customRed" : "hover:text-customRed"
            }`}
        >
          {children}
        </Typography>
      </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
      <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              color="blue-gray"
              className="text-lg font-bold"
          >
            <div className="font-custom flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-2">
              <img className="w-8 " src="../logos/icone_ss_bg.png" alt="logo"/>
              <span className="text-customRed"> AL</span> <span className="text-customBlue">MANARA</span>
            </div>
          </Typography>
          <ul className="ml-10 hidden items-center gap-8 lg:flex">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="text" className="bg-customBlue font-custom text-white">Sign In</Button>
          </div>
          <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
          >
            {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              {NAV_MENU.map(({ name, icon: Icon }) => (
                  <NavItem key={name}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
              ))}
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-2">
              <Button variant="text">Sign In</Button>

            </div>
          </div>
        </Collapse>
      </MTNavbar>
  );
}

export default Navbar;