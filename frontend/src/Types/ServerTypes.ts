export enum BlockTypes {
  artistsShowcase = "blocks.artists-showcase",
  worksShowcase = "blocks.works-showcase",
  subscribeForm = "blocks.subscriber-form",
  hero = "blocks.hero",
  allWorks = "blocks.all-works",
  allArtists = "blocks.all-artists",
  textAndImage = "blocks.text-and-picture",
  justContent = "blocks.just-content"
}

//Data
export type ServerArtist = {
  id: string;
  attributes: {
    title?: string;
    description?: string;
    name?: string;
    profile_photo?: {
      data: ServerImageMedia;
    };
  };
};

export type ServerWebsiteInfo = {
  id: string;
  attributes: {
    description?: string;
    title?: string;
  };
};

export type ServerWork = {
  id: string;
  attributes: {
    title?: string;
    description?: string;
    youtube_link?: string;
    artists?: {
      data?: ServerArtist[];
    };
  };
};

// Components
export type ServerAlign = "right" | "left" | "center";

export type ServerImageMedia = {
  id: string;
  attributes: {
    hash?: string;
    alternativeText?: string;
  };
};

export type ServerHeader = {
  id: string;
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  align: ServerAlign;
};

export type ServerParagraph = {
  id: string;
  text?: string;
  align?: ServerAlign;
  bullet?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  bold?: boolean;
};

export type ServerButton = {
  id: string;
  label?: string;
  href?: string;
  external?: boolean;
};

export type ServerSubscribeAction = {
  id: string;
  email_placeholder?: string;
  name_placeholder: string;
  message_placeholder?: string;
  button_text?: string;
  confirmation_message?: string;
};

// Showcases
export type ServerWorkDisplay = {
  id: string;
  work?: {
    data?: ServerWork;
  };
};

export type ServerArtistDisplay = {
  id: string;
  artist?: {
    data?: ServerArtist;
  };
};

// Blocks
export type ServerHeroBlock = {
  __component: BlockTypes.hero;
  id: string;
  background_image?: {
    data: ServerImageMedia;
  };
  background_video_url?: string;
  header?: ServerHeader;
  paragraph?: ServerParagraph;
  buttons?: ServerButton[];
};

export type ServerTextAndImageBlock = {
  __component: BlockTypes.textAndImage;
  id: string;
  image?: {
    data: ServerImageMedia;
  };
  header?: ServerHeader;
  paragraphs?: ServerParagraph[];
  buttons?: ServerButton[];
  align?: ServerAlign;
  subscribe?: ServerSubscribeAction;
};

export type ServerJustContentBlock = {
  __component: BlockTypes.justContent;
  id: string;
  header?: ServerHeader;
  paragraphs?: ServerParagraph[];
  buttons?: ServerButton[];
};

export type ServerSubscribeFormBlock = {
  __component: BlockTypes.subscribeForm;
  id: string;
  submit_button_text?: string;
  confirmation_text?: string;
  header?: ServerHeader;
  text?: ServerParagraph;
};

export type ServerArtistsShowcaseBlock = {
  __component: BlockTypes.artistsShowcase;
  id: string;
  artists?: ServerArtistDisplay[];
};

export type ServerWorksShowcaseBlock = {
  __component: BlockTypes.worksShowcase;
  id: string;
  works?: ServerWorkDisplay[];
};

export type ServerAllArtistsBlock = {
  __component: BlockTypes.allArtists;
  id: string;
  header?: ServerHeader;
  text?: ServerParagraph;
};

export type ServerAllWorksBlock = {
  __component: BlockTypes.allWorks;
  id: string;
  header?: ServerHeader;
  text?: ServerParagraph;
};

export type ServerBlock =
  | ServerHeroBlock
  | ServerSubscribeFormBlock
  | ServerArtistsShowcaseBlock
  | ServerWorksShowcaseBlock
  | ServerAllArtistsBlock
  | ServerAllWorksBlock
  | ServerTextAndImageBlock
  | ServerJustContentBlock;

// Page
export type ServerPage = {
  id: string;
  attributes: {
    blocks?: ServerBlock[];
  };
};
