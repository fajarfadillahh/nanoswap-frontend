import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueUltraLight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueHeavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueBlack.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const space = localFont({
  src: [
    {
      path: "../public/fonts/SpaceGrotesk/SpaceGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
