import React, { FC, useState } from "react";
import Image from "next/image";
import HeaderItem from "../../atoms/HeaderItem";
import HeaderHamburger from "../../atoms/HeaderHamburger";
import HeaderClose from "../../atoms/HeaderClose";
import { Home, List, User } from "../../public/images";
import styles from "./styles.module.css";

const items = [
  { link: "/home", text: "Home", icon: Home },
  { link: "/list", text: "List", icon: List },
  { link: "/account", text: "Account", icon: User },
];

const HeaderMenu: FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* mobile */}
      <HeaderHamburger
        openMenu={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <>
          <div className={styles.modal}>
            <div className={styles.button_close}>
              <HeaderClose
                closeMenu={() => {
                  setIsOpen(false);
                }}
              ></HeaderClose>
            </div>
            {items.map((item) => (
              <div key={item.text} className={styles.item_mobile}>
                <HeaderItem
                  link={item.link}
                  text={item.text}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
          <div className={styles.overlay} />
        </>
      )}
      {/* laptop */}
      <div className={styles.items_laptop}>
        {items.map((item) => (
          <div key={item.text} className={styles.item_laptop}>
            <HeaderItem link={item.link} text={item.text} icon={item.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderMenu;
