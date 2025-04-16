import { useCallback, useMemo, useState } from "react";

type useHoverBind = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

type useHoverResult = [boolean, useHoverBind];

export const useHover = (): useHoverResult => {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave]
  );
};
