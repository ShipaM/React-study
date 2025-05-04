//<адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export type ScrollSaveSchema = {
  scroll: ScrollSchema;
};
