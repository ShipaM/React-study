import { User } from "entities/User";

export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export const ArticleType = {
  IT: "IT",
  SCIENCE: "SCIENCE",
  ECONOMICS: "ECONOMICS",
  ALL: "ALL",
} as const;

export type ArticleType = ValueOf<typeof ArticleType>;

export const ArticleView = {
  BIG: "big",
  SMALL: "small",
} as const;

export const ArticleSortField = {
  VIEWS: "views",
  CREATED: "createdAt",
  TITLE: "title",
} as const;

export type ArticleSortField = ValueOf<typeof ArticleSortField>;

export type ArticleViewValue = ValueOf<typeof ArticleView>;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
