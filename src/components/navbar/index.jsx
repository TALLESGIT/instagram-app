import { BiMoon, BiExit } from "react-icons/bi";
import { BsSun, BsGear } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";

import LogoInstagram from "../../assets/Logo-instagram.svg";

import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";

const menuNav = [
  {
    icon: <AiOutlineHome />,
    menuName: "Inicio",
  },
  {
    icon: <RiGlobalLine />,
    menuName: "Explorar",
  },
  {
    icon: <FiSend />,
    menuName: "Direct",
  },
  {
    icon: <MdMonitor />,
    menuName: "IGTV",
  },
  {
    icon: <BsGear />,
    menuName: "Ajustes",
  },
];

// eslint-disable-next-line react/prop-types
export function NavBar({ themeToggler, theme }) {
  // eslint-disable-next-line react/prop-types
  function GroupText({ title, subTitle }) {
    return (
      <Flex gap="4px">
        <Typography>{title}</Typography>
        <Typography weight="300" size="12px" height="14px">
          {subTitle}
        </Typography>
      </Flex>
    );
  }

  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === "light" ? <BiMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>

      <img src={LogoInstagram} alt="logo Instagram" />

      <Flex>
        <C.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/143969312?v=4"
            alt="img  profile"
          />
        </C.Profile>

        <GroupText title="Tales Coelho" subTitle="@talescoelho" />
      </Flex>

      <Spacer margin="8px" />

      <Flex direction="row" justify="space-between">
        <GroupText title="148" subTitle="Publicações" />
        <GroupText title="15K" subTitle="Seguidores" />
        <GroupText title="1K" subTitle="Seguindo" />
      </Flex>

      <Spacer />
      <Flex align="start" gap="16px">
        {menuNav.map((menu) => (
          <C.ListIcon key={menu.menuName}>
            {menu.icon}
            <Typography>{menu.menuName}</Typography>
          </C.ListIcon>
        ))}
      </Flex>

      <Spacer />
      <C.Divider />
      <Spacer margin="8px" />

      <Flex align="start">
        <C.ListIcon>
          <BiExit />
          <Typography>Sair</Typography>
        </C.ListIcon>
      </Flex>
    </C.Container>
  );
}
