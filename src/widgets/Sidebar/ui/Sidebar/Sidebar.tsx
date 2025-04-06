import { classNames } from "shared/lib/classNames/classNames";
import "./Sidebar.css";
import React, { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ButtonTheme, ButtonSize } from "shared/ui/Button/buttonConstants";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { useSelector } from "react-redux";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem item={item} collapsed={collapsed} key={item.text} />
    ));
  }, [collapsed, sidebarItemsList]);

  return (
    <div
      data-testid="sidebar"
      className={classNames("sidebar", { ["collapsed"]: collapsed }, [
        className ?? "",
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
      <div className={classNames("items", {}, [className])}>{itemsList}</div>
      <div className={classNames("switchers", {}, [className])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className="lang" />
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
