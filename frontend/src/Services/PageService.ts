import { Locales, Page } from "../Types";
import { BlockTypes, ServerPage } from "../Types/ServerTypes";
import { serverPageToPage } from "../Types/typeConverters";
import { getWithLocale } from "./ApiService";
import { Routes, USE_STATIC_DATA } from "./routes";

const STATIC_HOME_PAGE_DATA: ServerPage = {
  id: "home",
  attributes: {
    blocks: [
      {
        __component: BlockTypes.hero,
        id: "home-hero",
        header: {
          id: "home-hero-header",
          text: "Let's help each other tell stories with music",
          type: "h1",
          align: "center"
        },
        paragraph: {
          id: "home-hero-paragraph",
          text: "There is so much talent in our student body, but it is hard to meet the right people to take our musical projects to the finish line. SCORE is a platform where collaborators from diverse artistic backgrounds, including film, composition, recording, production, performance, dance, and theatre, can connect and collaborate.",
          align: "center"
        }
      },
      {
        __component: BlockTypes.textAndImage,
        id: "home-content-3",
        image: {
          data: {
            id: "home-content-3-image",
            attributes: {
              hash: "console_img_ba309632f6",
              alternativeText: ""
            }
          }
        },
        header: {
          id: "home-content-3-header",
          text: "Hear about opportunities",
          type: "h2",
          align: "left"
        },
        paragraphs: [
          {
            id: "home-content-2-paragraph-1",
            text: "We send out all active calls for collaborators in our newsletter, along with event updates, musical insights, and tips."
          }
        ],
        buttons: [],
        align: "right",
        subscribe: {
          id: "home-content-3-subscribe",
          email_placeholder: "Your Email",
          name_placeholder: "Your Name",
          message_placeholder: "Write anything you would like to add",
          button_text: "Subscribe",
          confirmation_message: "Thank you!"
        }
      },
      {
        __component: BlockTypes.textAndImage,
        id: "home-content-2",
        header: {
          id: "home-content-2-header",
          text: "Submit a project",
          type: "h2",
          align: "left"
        },
        paragraphs: [
          {
            id: "home-content-2-paragraph-1",
            text: "If you're currently working on a project and need collaborators, whether you're a filmmaker seeking music, a songwriter in search of recording engineers, or a composer looking to assemble a string quartet, we're here to help."
          },
          {
            id: "home-content-2-paragraph-2",
            text: "Just drop us an email at scoreassociation.ca@gmail.com with all the details of your project and we will include a call for collaborators in the following newsletter."
          }
        ],
        buttons: [],
        align: "left",
        image: {
          data: {
            id: "home-content-3-image",
            attributes: {
              hash: "SCORE_cinema_room_vxmoqi",
              alternativeText:
                "Composer working on a movie in the surround sound room."
            }
          }
        }
      }
    ]
  }
};

const STATIC_ABOUT_PAGE_DATA: ServerPage = {
  id: "about",
  attributes: {
    blocks: [
      {
        __component: BlockTypes.hero,
        id: "about-hero",
        background_video_url:
          "https://scoreassociation.s3.amazonaws.com/sheet_music.mp4",
        header: {
          id: "about-hero-header",
          text: "About us",
          type: "h1",
          align: "center"
        }

        // https://res.cloudinary.com/dxdm4gaaw/image/upload/v1666749438/thumbnail_setup_img_be352acb7c.jpg
      },
      {
        __component: BlockTypes.justContent,
        id: "about-content-1",
        header: {
          id: "home-hero-header",
          text: "Our Mission",
          type: "h1",
          align: "center"
        },
        paragraphs: [
          {
            id: "about-content-1-paragraph-1",
            text: "We are a multi-disciplinary group of students with a passion for creating music and professional experience in the field of scoring to media."
          },
          {
            id: "about-content-1-paragraph-2",
            text: "We came together to establish the SCORE Association because we wanted to offer aspiring composers the opportunity to get their hands dirty on real film and other types of projects."
          },
          {
            id: "about-content-1-paragraph-3",
            text: "It can be difficult to enter the music industry and get professional experience; opportunities often come from meeting the right people. Our goal is to open up doors for passionate creators, like some have done for us. We help creators acquire skills and experiences that will allow them to kickstart thriving creative careers."
          },
          {
            id: "about-content-1-paragraph-3",
            text: "We work alongside film makers to enhance storytelling bu creating purposeful, authentic soundtracks. From ideation, to scoring, recording, and producing, we manage the full cycle of the music production. If you are a film-maker seeking hand-crafted music to complement your creation, we got your back."
          }
        ]
      }
    ]
  }
};

export async function getPage(
  route: Routes,
  locale: Locales = Locales.en
): Promise<Page> {
  let data: ServerPage = {
    id: "home",
    attributes: {
      blocks: []
    }
  };

  if (USE_STATIC_DATA) {
    if (route === Routes.HOME_PAGE_ROUTE) {
      data = STATIC_HOME_PAGE_DATA;
    }
    if (route === Routes.ABOUT_PAGE_ROUTE) {
      data = STATIC_ABOUT_PAGE_DATA;
    }
  } else {
    data = await getWithLocale<ServerPage>(
      route,
      {
        populate: "deep,4"
      },
      locale
    );
  }

  return serverPageToPage(data);
}
