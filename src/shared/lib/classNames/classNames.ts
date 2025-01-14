type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value)) // Фильтруем только истинные значения
      .map(([className]) => className), // Извлекаем только ключи
  ].join(" "); // Соединяем их в строку через пробел
}
