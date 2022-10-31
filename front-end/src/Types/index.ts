import {
  BlockTypes,
  ServerButton,
  ServerHeader,
  ServerParagraph,
  ServerAlign
} from "./ServerTypes";

export type Artist = {
  id: string;
  title?: string;
  description?: string;
  name?: string;
  profilePhoto?: ImageMedia;
};

export type WebsiteInfo = {
  id: string;
  title?: string;
  description?: string;
};

export type Work = {
  id: string;
  title?: string;
  description?: string;
  youtubeLink?: string;
  artists?: {
    name?: string;
    id?: string;
  }[];
};

export type ImageMedia = {
  id: string;
  name?: string;
  alternativeText?: string;
};

export type HeaderData = { __component: "header" } & ServerHeader;

export type ParagraphData = { __component: "paragraph" } & ServerParagraph;

export type ButtonData = ServerButton;

export type SubscribeActionData = {
  id: string;
  emailPlaceholder?: string;
  namePlaceholder?: string;
  messagePlaceholder?: string;
  buttonText?: string;
  confirmationMessage?: string;
};

export type ArtistDisplayData = {
  id: string;
  artist?: Artist;
};

export type WorkDisplayData = {
  id: string;
  work?: Work;
};

export type HeroBlockData = {
  __component: BlockTypes.hero;
  id: string;
  backgroundImage?: ImageMedia;
  backgroundVideoUrl?: string;
  header?: HeaderData;
  paragraph?: ParagraphData;
  buttons?: ButtonData[];
};

export type TextAndImageBlockData = {
  __component: BlockTypes.textAndImage;
  id: string;
  header?: HeaderData;
  paragraphs?: ParagraphData[];
  buttons?: ButtonData[];
  image?: ImageMedia;
  align?: ServerAlign;
  subscribe?: SubscribeActionData;
};

export type JustContentBlockData = {
  __component: BlockTypes.justContent;
  id: string;
  header?: HeaderData;
  paragraphs?: ParagraphData[];
  buttons?: ButtonData[];
};

export type SubscribeFormBlockData = {
  __component: BlockTypes.subscribeForm;
  id: string;
  submitButtonText?: string;
  confirmationText?: string;
  header?: HeaderData;
  text?: ParagraphData;
};

export type ArtistsShowcaseBlockData = {
  __component: BlockTypes.artistsShowcase;
  id: string;
  artists?: Artist[];
};

export type WorksShowcaseBlockData = {
  __component: BlockTypes.worksShowcase;
  id: string;
  works?: Artist[];
};

export type AllWorksBlockData = {
  __component: BlockTypes.allWorks;
  id: string;
  header?: HeaderData;
  text?: ParagraphData;
};

export type AllArtistsBlockData = {
  __component: BlockTypes.allArtists;
  id: string;
  header?: HeaderData;
  text?: ParagraphData;
};

export type BlockData =
  | HeroBlockData
  | SubscribeFormBlockData
  | ArtistsShowcaseBlockData
  | WorksShowcaseBlockData
  | AllArtistsBlockData
  | AllWorksBlockData
  | TextAndImageBlockData
  | JustContentBlockData;

export enum Locales {
  fr = "fr",
  en = "en"
}

export type Page = {
  id: string;
  blocks?: BlockData[];
};

// Creators
export type CreateSubscriberParameters = {
  email: string;
  name: string;
  title?: string;
};
