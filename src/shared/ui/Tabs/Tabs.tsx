import { classNames } from "shared/lib/classNames/classNames";
import { memo, ReactNode, useCallback } from "react";
import { Card } from "shared/ui/Card/Card";
import "./Tabs.css";
import { CardTheme } from "../Card/cardConstants";

export type TabItem = {
  value: string;
  content: ReactNode;
};

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={classNames("tabs", {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className="tab"
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});

Tabs.displayName = "Tabs";
