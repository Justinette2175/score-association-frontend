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
        background_video_url:
          "https://scoreassociation.s3.amazonaws.com/SCORE_hero_video.mp4",
        header: {
          id: "home-hero-header",
          text: "We tell stories",
          type: "h1",
          align: "center"
        }
      },
      {
        __component: BlockTypes.textAndImage,
        id: "home-hero-content-1",
        image: {
          data: {
            id: "home-content-1-image",
            attributes: {
              hash: "setup_img_b0ca0c6584",
              alternativeText: ""
            }
          }
        },
        header: {
          id: "home-content-1-header",
          text: "About us",
          type: "h2",
          align: "left"
        },
        paragraphs: [
          {
            id: "home-content-1-paragraph-1",
            text: "We produce high-quality audio content for adacemic media projects like films, games, and multimedia experiences."
          },
          {
            id: "home-content-1-paragraph-1",
            text: "We provide experiential learning opportunities in media composition."
          }
        ],
        buttons: [
          {
            id: "home-content-1-button-1",
            label: "Learn More",
            href: "/about"
          }
        ],
        align: "left"
      },
      // {
      //   __component: BlockTypes.textAndImage,
      //   id: "home-content-3",
      //   image: {
      //     data: {
      //       id: "home-content-3-image",
      //       attributes: {
      //         hash: "console_img_ba309632f6",
      //         alternativeText: ""
      //       }
      //     }
      //   },
      //   header: {
      //     id: "home-content-3-header",
      //     text: "Subscribe to our newsletter",
      //     type: "h2",
      //     align: "left"
      //   },
      //   paragraphs: [
      //     {
      //       id: "home-content-2-paragraph-1",
      //       text: "You can reach us via email at scoreassociation.ca."
      //     }
      //   ],
      //   buttons: [],
      //   align: "right",
      //   subscribe: {
      //     id: "home-content-3-subscribe",
      //     email_placeholder: "Your Email",
      //     name_placeholder: "Your Name",
      //     message_placeholder: "Write anything you would like to add",
      //     button_text: "Subscribe",
      //     confirmation_message: "Thank you!"
      //   }
      // },
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
          text: "Participate in our 2023 Composition Competition",
          type: "h2",
          align: "left"
        },
        paragraphs: [
          {
            id: "home-content-2-paragraph-1",
            text: "Submissions are now OPEN for the SCORE Association Composers Competition."
          }
        ],
        buttons: [
          {
            id: "home-content-3-button-1",
            label: "Learn More",
            href: "/competition"
          }
        ],
        align: "right"
      },
      {
        __component: BlockTypes.textAndImage,
        id: "home-content-2",
        header: {
          id: "home-content-2-header",
          text: "Contact Us",
          type: "h2",
          align: "left"
        },
        paragraphs: [
          {
            id: "home-content-2-paragraph-1",
            text: "You can reach us via email at scoreassociation.ca@gmail.com"
          }
        ],
        buttons: [],
        align: "left"
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

const STATIC_COMPETITION_PAGE_DATA: ServerPage = {
  id: "competition",
  attributes: {
    blocks: [
      {
        __component: BlockTypes.hero,
        id: "competition-hero",
        header: {
          id: "competition-hero-header",
          text: "Submissions are now open for the Composers Competition",
          type: "h1",
          align: "center"
        }
      },
      {
        __component: BlockTypes.justContent,
        id: "competition-content-1",
        header: {
          id: "home-hero-header",
          text: "The 2023 Composition Competition",
          type: "h1",
          align: "center"
        },
        buttons: [
          {
            id: "competition-image",
            label: "See competition image",
            external: true,
            href: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_potw2236a.jpg"
          },
          {
            id: "composer-submission",
            label: "Submit a composition",
            external: true,
            href: "https://forms.gle/QFVL9vWQTT6EeFr38"
          },
          {
            id: "musician-submission",
            label: "Register as a musician",
            external: true,
            href: "https://forms.gle/58u72C4FqQxXne1M9"
          }
        ],
        paragraphs: [
          {
            id: "competition-content-1-paragraph-1",
            text: `This year's theme for the SCORE Association Composers Competition is to write a piece inspired by a NASA image of two overlapping spiral galaxies. Click on the button below to view the image. The aim of the competition is to create a piece of music that conveys the emotion of the image, while also pushing boundaries and exploring new musical ideas.`
          },
          {
            id: "competition-content-1-paragraph-2",
            text: `Submission criteria`,
            bold: true
          },
          {
            id: "competition-content-1-paragraph-3",
            text: "The competition is open to all composers, regardless of experience or background.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-4",
            text: "The piece should be written for strings section or strings quartet.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-5",
            text: "3-5 minutes in duration.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-6",
            text: "All entries must be received by the specified deadline. Late entries will not be accepted.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-7",
            text: "Eligibility",
            bold: true
          },
          {
            id: "competition-content-1-paragraph-8",
            text: "Composers must be a current student at Concordia University.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-9",
            text: "The Award",
            bold: true
          },
          {
            id: "competition-content-1-paragraph-10",
            text: "The winner of the SCORE Association Composers Competition will receive a professional recording for their piece, and a cash prize of 250$.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-11",
            text: "Submission Process",
            bold: true
          },
          {
            id: "competition-content-1-paragraph-12",
            text: "All applicants must fill out the online application form by February 30, 2023.",
            bullet: true
          },
          {
            id: "competition-content-1-paragraph-13",
            text: "Submission materials should be uploaded in the application form. Required materials include: Score(s) in PDF format, Mp3 audio file of the piece, and a short text describing the general idea behind the composition",
            bullet: true
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
    if (route === Routes.COMPETITION_PAGE_ROUTE) {
      data = STATIC_COMPETITION_PAGE_DATA;
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
