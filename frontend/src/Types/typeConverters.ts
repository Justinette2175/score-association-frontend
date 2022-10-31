import {
  Artist,
  HeaderData,
  ParagraphData,
  ImageMedia,
  Work,
  ButtonData,
  WorkDisplayData,
  ArtistDisplayData,
  HeroBlockData,
  SubscribeFormBlockData,
  ArtistsShowcaseBlockData,
  WorksShowcaseBlockData,
  BlockData,
  WebsiteInfo,
  AllWorksBlockData,
  AllArtistsBlockData,
  TextAndImageBlockData,
  Page,
  JustContentBlockData,
  SubscribeActionData
} from ".";
import {
  ServerArtist,
  ServerHeader,
  ServerParagraph,
  ServerImageMedia,
  ServerWork,
  ServerButton,
  ServerWorkDisplay,
  ServerArtistDisplay,
  ServerHeroBlock,
  ServerSubscribeFormBlock,
  ServerArtistsShowcaseBlock,
  ServerWorksShowcaseBlock,
  ServerBlock,
  BlockTypes,
  ServerWebsiteInfo,
  ServerAllWorksBlock,
  ServerAllArtistsBlock,
  ServerTextAndImageBlock,
  ServerPage,
  ServerJustContentBlock,
  ServerSubscribeAction
} from "./ServerTypes";

export function serverImageMediaToImageMedia(
  serverImageMedia: ServerImageMedia
): ImageMedia {
  const { id, attributes } = serverImageMedia;
  const { hash, alternativeText } = attributes;
  return {
    id,
    name: hash,
    alternativeText
  };
}

export function serverArtistToArtist(serverArtist: ServerArtist): Artist {
  const { attributes, id } = serverArtist;
  const { title, description, name, profile_photo } = attributes;
  const profilePhoto = profile_photo?.data
    ? serverImageMediaToImageMedia(profile_photo?.data)
    : undefined;
  return {
    id,
    title,
    description,
    name,
    profilePhoto
  };
}

export function serverWorkToWork(serverWork: ServerWork): Work {
  const { attributes, id } = serverWork;
  const {
    title,
    description,
    youtube_link,
    artists: serverArtists
  } = attributes;

  const artists = serverArtists?.data
    ? serverArtists?.data?.map(serverArtistToArtist)
    : [];

  return {
    id,
    title,
    description,
    artists,
    youtubeLink: youtube_link
  };
}

export function serverHeaderToHeaderData(
  serverHeader: ServerHeader
): HeaderData {
  return { __component: "header", ...serverHeader } as HeaderData;
}

export function serverParagraphToParagraphData(
  serverParagraph: ServerParagraph
): ParagraphData {
  return { __component: "paragraph", ...serverParagraph } as ParagraphData;
}

export function serverButtonToButtonData(
  serverButton: ServerButton
): ButtonData {
  return serverButton as ButtonData;
}

export function ServerSubscribeActionToSubscribeActionData(
  subscribeAction: ServerSubscribeAction
): SubscribeActionData {
  const {
    id,
    email_placeholder: emailPlaceholder,
    name_placeholder: namePlaceholder,
    message_placeholder: messagePlaceholder,
    button_text: buttonText,
    confirmation_message: confirmationMessage
  } = subscribeAction;

  return {
    id,
    emailPlaceholder,
    namePlaceholder,
    messagePlaceholder,
    buttonText,
    confirmationMessage
  };
}

export function serverWorkDisplayToWorkDisplayData(
  serverWorkDisplay: ServerWorkDisplay
): WorkDisplayData {
  const { id, work: serverWork } = serverWorkDisplay;
  const work = serverWork?.data
    ? serverWorkDisplayToWorkDisplayData(serverWork?.data)
    : undefined;

  return {
    id,
    work
  };
}

export function serverArtistDisplayToArtistDisplayData(
  serverArtistDisplay: ServerArtistDisplay
): ArtistDisplayData {
  const { id, artist: serverArtist } = serverArtistDisplay;
  const artist = serverArtist?.data
    ? serverArtistDisplayToArtistDisplayData(serverArtist?.data)
    : undefined;

  return {
    id,
    artist
  };
}

export function serverHeroBlockToHeroBlockData(
  serverHeroBlock: ServerHeroBlock
): HeroBlockData {
  const {
    __component,
    id,
    background_image,
    header: serverHeader,
    paragraph: serverParagraph,
    buttons: serverButtons,
    background_video_url
  } = serverHeroBlock;
  const header = serverHeader
    ? serverHeaderToHeaderData(serverHeader)
    : undefined;
  const paragraph = serverParagraph
    ? serverParagraphToParagraphData(serverParagraph)
    : undefined;
  const buttons = serverButtons
    ? serverButtons.map(serverButtonToButtonData)
    : [];
  const backgroundImage = background_image?.data
    ? serverImageMediaToImageMedia(background_image.data)
    : undefined;

  return {
    __component,
    id,
    header,
    paragraph,
    buttons,
    backgroundImage,
    backgroundVideoUrl: background_video_url
  };
}

export function serverTextAndImageBlockToTextAndImageBlockData(
  textAndImageBlock: ServerTextAndImageBlock
): TextAndImageBlockData {
  const {
    __component,
    id,
    image: serverImage,
    header: serverHeader,
    paragraphs: serverParagraphs,
    buttons: serverButtons,
    subscribe: serverSubscribe,
    align
  } = textAndImageBlock;
  const header = serverHeader
    ? serverHeaderToHeaderData(serverHeader)
    : undefined;
  const paragraphs = serverParagraphs
    ? serverParagraphs.map(serverParagraphToParagraphData)
    : undefined;
  const buttons = serverButtons
    ? serverButtons.map(serverButtonToButtonData)
    : [];
  const image = serverImage?.data
    ? serverImageMediaToImageMedia(serverImage.data)
    : undefined;

  const subscribe = serverSubscribe
    ? ServerSubscribeActionToSubscribeActionData(serverSubscribe)
    : undefined;

  return {
    __component,
    id,
    header,
    paragraphs,
    buttons,
    image,
    align,
    subscribe
  };
}

export function serverJustContentBlockToJustContentBlockData(
  justContentBlock: ServerJustContentBlock
): JustContentBlockData {
  const {
    __component,
    id,
    header: serverHeader,
    paragraphs: serverParagraphs,
    buttons: serverButtons
  } = justContentBlock;
  const header = serverHeader
    ? serverHeaderToHeaderData(serverHeader)
    : undefined;
  const paragraphs = serverParagraphs
    ? serverParagraphs.map(serverParagraphToParagraphData)
    : undefined;
  const buttons = serverButtons
    ? serverButtons.map(serverButtonToButtonData)
    : [];

  return {
    __component,
    id,
    header,
    paragraphs,
    buttons
  };
}

export function serverSubscribeFormBlockToSubscribeFormBlockData(
  serverSubscribeFormBlock: ServerSubscribeFormBlock
): SubscribeFormBlockData {
  const {
    __component,
    id,
    submit_button_text: submitButtonText,
    confirmation_text: confirmationText,
    header: serverHeader,
    text: serverText
  } = serverSubscribeFormBlock;

  const header = serverHeader
    ? serverHeaderToHeaderData(serverHeader)
    : undefined;
  const text = serverText
    ? serverParagraphToParagraphData(serverText)
    : undefined;

  return {
    __component,
    id,
    header,
    submitButtonText,
    confirmationText,
    text
  };
}

export function serverArtistsShowcaseBlockToArtistsShowcaseBlockData(
  serverArtistsShowcaseBlock: ServerArtistsShowcaseBlock
): ArtistsShowcaseBlockData {
  const {
    __component,
    id,
    artists: serverArtists
  } = serverArtistsShowcaseBlock;

  const artists = (serverArtists || [])?.map(
    serverArtistDisplayToArtistDisplayData
  );

  return {
    __component,
    id,
    artists
  };
}

export function serverWorksShowcaseBlockToWorksShowcaseBlockData(
  serverWorksShowcaseBlock: ServerWorksShowcaseBlock
): WorksShowcaseBlockData {
  const { __component, id, works: serverWorks } = serverWorksShowcaseBlock;

  const works = (serverWorks || [])?.map(
    serverArtistDisplayToArtistDisplayData
  );

  return {
    __component,
    id,
    works
  };
}

export function serverAllWorksBlockToAllWorksBlockData(
  serverAllWorksBlock: ServerAllWorksBlock
): AllWorksBlockData {
  const {
    id,
    header: serverHeader,
    text: serverText,
    __component
  } = serverAllWorksBlock;

  const header = serverHeader
    ? serverHeaderToHeaderData(serverHeader)
    : undefined;
  const text = serverText
    ? serverParagraphToParagraphData(serverText)
    : undefined;

  return {
    id,
    __component,
    text,
    header
  };
}

export function serverAllArtistsBlockToAllArtistsBlockData(
  serverAllArtistsBlock: ServerAllArtistsBlock
): AllArtistsBlockData {
  const {
    id,
    header: serverHeader,
    text: serverText,
    __component
  } = serverAllArtistsBlock;

  const header = serverHeader
    ? serverHeaderToHeaderData(serverHeader)
    : undefined;
  const text = serverText
    ? serverParagraphToParagraphData(serverText)
    : undefined;

  return {
    id,
    __component,
    text,
    header
  };
}

export function serverBlockToBlockData(serverBlock: ServerBlock): BlockData {
  switch (serverBlock.__component) {
    case BlockTypes.hero:
      return serverHeroBlockToHeroBlockData(serverBlock);
    case BlockTypes.subscribeForm:
      return serverSubscribeFormBlockToSubscribeFormBlockData(serverBlock);
    case BlockTypes.artistsShowcase:
      return serverArtistsShowcaseBlockToArtistsShowcaseBlockData(serverBlock);
    case BlockTypes.worksShowcase:
      return serverWorksShowcaseBlockToWorksShowcaseBlockData(serverBlock);
    case BlockTypes.allArtists:
      return serverAllArtistsBlockToAllArtistsBlockData(serverBlock);
    case BlockTypes.allWorks:
      return serverAllWorksBlockToAllWorksBlockData(serverBlock);
    case BlockTypes.textAndImage:
      return serverTextAndImageBlockToTextAndImageBlockData(serverBlock);
    case BlockTypes.justContent:
      return serverJustContentBlockToJustContentBlockData(serverBlock);
  }
}

export function serverPageToPage(page: ServerPage): Page {
  const { id, attributes } = page;

  return {
    id,
    blocks: (attributes?.blocks || []).map(serverBlockToBlockData)
  };
}

export function serverWebsiteInfoToWebsiteInfo(
  serverWebsiteInfo: ServerWebsiteInfo
): WebsiteInfo {
  const { id, attributes } = serverWebsiteInfo;
  const { title, description } = attributes;
  return {
    id,
    title,
    description
  };
}
