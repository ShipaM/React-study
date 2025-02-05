import { classNames } from "shared/lib/classNames/classNames";
import "./Sidebar.css";
import React, { useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ButtonTheme, ButtonSize } from "shared/ui/Button/buttonConstants";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [col, setCol] = useState(0);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <SidebarItem item={item} collapsed={collapsed} key={item.text} />
    ));
  }, [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames("sidebar", { ["collapsed"]: collapsed }, [
        className,
      ])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggler"
        onClick={onToggle}
        className={classNames("collapse-btn", {}, [className])}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classNames("items", {}, [className])}>
        <button onClick={() => setCol(col + 1)}>{col}</button>
        {itemsList}
      </div>
      <div className={classNames("switchers", {}, [className])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className="lang" />
      </div>
    </div>
  );
};
