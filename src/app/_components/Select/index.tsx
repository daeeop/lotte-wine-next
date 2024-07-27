'use client';

import { useToggle } from 'react-use';
import { Children, PropsWithChildren, ReactNode } from 'react';

import style from './style.module.scss';

type Props = PropsWithChildren & {
  label: string;
};

const Select = ({ children, label }: Props) => {
  const [open, toggle] = useToggle(false);

  return (
    <div className={style.select}>
      <Select.Trigger toggle={toggle}>{label}</Select.Trigger>
      <Select.Options open={open}>{children}</Select.Options>
    </div>
  );
};

export const SelectTrigger = ({
  toggle,
  children,
}: {
  toggle: () => void;
  children: ReactNode;
}) => {
  return (
    <div className={style.triggerContainer} onClick={toggle}>
      {children}
    </div>
  );
};

export const SelectOptions = ({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) => {
  if (!open) return null;
  return <div className={style.optionContainer}>{children}</div>;
};

Select.Options = SelectOptions;
Select.Trigger = SelectTrigger;

export default Select;
