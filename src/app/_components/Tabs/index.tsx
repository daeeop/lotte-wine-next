import { Menus } from '@/app/hooks/useTabs';
import cx from 'classnames';
import style from './style.module.scss';

const TabItem = ({
  title,
  current,
  toggle,
}: {
  title: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx(style.tab, current && style.current)} onClick={toggle}>
      {title}
    </li>
  );
};

export default function Tabs({
  current,
  menu,
  toggle,
}: {
  current: string;
  menu: Menus[];
  toggle: (value: string) => () => void;
}) {
  return (
    <div className={cx(style.tabsContainer)}>
      <ul
        className={cx(
          style.tabsList,
          menu.length % 2 === 0 && style.tabsListByGrid
        )}
      >
        {menu.map((m) => (
          <TabItem
            {...m}
            key={m.id}
            title={m.label}
            toggle={toggle(m.value)}
            current={current === m.value}
          />
        ))}
      </ul>
    </div>
  );
}
