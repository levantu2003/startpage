// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "kaiser",
      background_url: `src/img/image.png`,
      categories: [
        {
          name: "Mạng xã hội",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.pink,
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com",
              icon: "brand-tiktok",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "Google",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "classroom",
              url: "https://classroom.google.com/u/1/",
              icon: "chalkboard",
              icon_color: palette.green,
            },
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brand-kick",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "Học tập",
          links: [
            {
              name: "udemy",
              url: "https://www.udemy.com/home/my-courses/learning/",
              icon: "certificate",
              icon_color: palette.lavender,
            },
            {
              name: "japanese",
              url: "https://drive.google.com/drive/folders/1iTUu9RzFuaZqbeK1abDxfXzO10zu8mC8",
              icon: "torii",
              icon_color: palette.peach,
            },
            {
              name: "english",
              url: "https://drive.google.com/drive/folders/164FmRpa7TgPWc74a-yopVK1JBccJe78I",
              icon: "currency-dollar",
              icon_color: palette.green,
            },
            {
              name: "ML Resource",
              url: "https://ml-resources.vercel.app/",
              icon: "brain",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "AI",
          links: [
            {
              name: "claude",
              url: "https://claude.ai/chats",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/",
              icon: "robot",
              icon_color: palette.green,
            },
            {
              name: "you.com",
              url: "https://you.com/",
              icon: "brand-ycombinator",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
