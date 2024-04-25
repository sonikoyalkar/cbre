/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          whitesmoke: "#ececec",
          gray: {
            "100": "#757575",
            "200": "rgba(255, 255, 255, 0.8)",
          },
          darkslategray: {
            "100": "rgba(51, 51, 51, 0.5)",
            "200": "rgba(51, 51, 51, 0.8)",
          },
          white: "#fff",
          seagreen: {
            "100": "#3c8943",
            "200": "#10704e",
            "300": "rgba(60, 137, 67, 0.16)",
          },
          black: "#000",
          gainsboro: "#d9d9d9",
        },
        spacing: {},
        fontFamily: {
          roboto: "Roboto",
          inter: "Inter",
        },
        borderRadius: {
          xl: "20px",
        },
      },
      fontSize: {
        base: "16px",
        xl: "20px",
        "19xl": "38px",
        "7xl": "26px",
        "2xl": "21px",
        "2xs": "11px",
        inherit: "inherit",
      },
      screens: {
        mq1600: {
          raw: "screen and (max-width: 1600px)",
        },
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq900: {
          raw: "screen and (max-width: 900px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  