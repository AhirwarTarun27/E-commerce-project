import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sidebarData = [
  {
    title: "Log In",
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket as IconProp} />,
    link: "/login",
    cName: "sidebarItem textColor",
  },
  {
    title: "Register",
    icon: <FontAwesomeIcon icon={faUser as IconProp} />,
    link: "/signup",
    cName: "sidebarItem textColor",
  },
  {
    title: "Product Detail Form",
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket as IconProp} />,
    link: "/product-details",
    cName: "sidebarItem textColor",
  },
];
