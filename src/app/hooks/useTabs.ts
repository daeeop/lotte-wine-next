import { useState } from 'react';

export type Menus = {
  id: number;
  value: string;
  label: string;
};

const useTabs = ({ menu }: { menu: Menus[] }) => {
  const [current, setCurrent] = useState(menu[0].value);

  const toggleMenu = (label: string) => () => {
    setCurrent(label);
  };

  return { current, toggleMenu };
};

export default useTabs;
