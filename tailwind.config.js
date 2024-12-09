/** @tye {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			Inconsolata: ["Inconsolata", "monospace"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		animation: {
  			gradient: 'gradient 8s linear infinite',
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			},
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    createThemes({
      github: {
        mainBg: "#24292e",
        bgText: "rgba(56, 58, 61, 0.35)",
        textColor: "#efefef",
        accentColor: "#f9826c",
        titlebarBg: "#1f2428",
        sidebarBg: "#24292e",
        sidebarHoverBg: "#1f2428",
        explorerBg: "#1f2428",
        explorerHoverBg: "#24292e",
        explorerBorder: "#161a1d",
        tabsBg: "#1f2428",
        tabBg: "#1f2428",
        tabActiveBg: "#24292e",
        tabBorder: "#24292e",
        bottombarBg: "#24292e",
        bottombarBorder: "#1b1f23",
        buttonBg: "#176f2c",
        buttonText: "#dcffe4",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#24292e",
        scrollbarThumbBg: "#333536",
        articleBg: "#1f2428",
      },
      dracula: {
        mainBg: "#282a36",
        bgText: "#313340",
        textColor: "#efefef",
        accentColor: "#bd93f9",
        titlebarBg: "#1e1f29",
        sidebarBg: "#343746",
        sidebarHoverBg: "#3c3d51",
        explorerBg: "#21222c",
        explorerHoverBg: "#313241",
        explorerBorder: "#161a1d",
        tabsBg: "#191a21",
        tabBg: "#21222c",
        tabActiveBg: "#282a36",
        tabBorder: "#191a21",
        bottombarBg: "#191a21",
        bottombarBorder: "#191a21",
        buttonBg: "#44475a",
        buttonText: "#f8f8f2",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#282a36",
        scrollbarThumbBg: "#454647",
        articleBg: "#21222c",
      },
      shubhDark: {
        mainBg: "#0a0e14",
        bgText: "#101620",
        textColor: "#efefef",
        accentColor: "#e6b450",
        titlebarBg: "#1f2428",
        sidebarBg: "#0a0e14",
        sidebarHoverBg: "#00010a",
        explorerBg: "#0a0e14",
        explorerHoverBg: "#00010a",
        explorerBorder: "transparent",
        tabsBg: "#0a0e14",
        tabBg: "#0a0e14",
        tabActiveBg: "#0a0e14",
        tabBorder: "transparent",
        bottombarBg: "#0a0e14",
        bottombarBorder: "transparent",
        buttonBg: "#e6b450",
        buttonText: "#0a0e14",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#0a0e14",
        scrollbarThumbBg: "#454647",
        articleBg: "#10121a",
      },
      shubhMirage: {
        mainBg: "#1f2430",
        bgText: "#21242b",
        textColor: "#efefef",
        accentColor: "#e6b450",
        titlebarBg: "#1f2428",
        sidebarBg: "#1f2430",
        sidebarHoverBg: "#191e2a",
        explorerBg: "#1f2430",
        explorerHoverBg: "#191e2a",
        explorerBorder: "transparent",
        tabsBg: "#1f2430",
        tabBg: "#1f2430",
        tabActiveBg: "#1f2430",
        tabBorder: "transparent",
        bottombarBg: "#1f2430",
        bottombarBorder: "transparent",
        buttonBg: "#e6b450",
        buttonText: "#1f2430",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#1f2430",
        scrollbarThumbBg: "#454647",
        articleBg: "#252e3d",
      },
      nord: {
        mainBg: "#2e3440",
        bgText: "#3b414d",
        textColor: "#efefef",
        accentColor: "#88c0d0",
        titlebarBg: "#1f2428",
        sidebarBg: "#2e3440",
        sidebarHoverBg: "#434c5e",
        explorerBg: "#2e3440",
        explorerHoverBg: "#434c5e",
        explorerBorder: "rgba(136, 192, 208, 0.2)",
        tabsBg: "#2e3440",
        tabBg: "#2e3440",
        tabActiveBg: "#3b4252",
        tabBorder: "transparent",
        bottombarBg: "#3b4252",
        bottombarBorder: "transparent",
        buttonBg: "#434c5e",
        buttonText: "#d8dee9",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#2e3440",
        scrollbarThumbBg: "#454647",
        articleBg: "#363f50",
      },
      nightOwl: {
        mainBg: "#011627",
        bgText: "#031d33",
        textColor: "#89a4bb",
        accentColor: "rgb(95, 126, 151)",
        titlebarBg: "#011627",
        sidebarBg: "#011627",
        sidebarHoverBg: "#0e293f",
        explorerBg: "#011627",
        explorerHoverBg: "#0e293f",
        explorerBorder: "transparent",
        tabsBg: "#011627",
        tabBg: "#01111d",
        tabActiveBg: "#0b2942",
        tabBorder: "rgb(39, 43, 59)",
        bottombarBg: "#011627",
        bottombarBorder: "#262a39",
        buttonBg: "rgb(95, 126, 151)",
        buttonText: "#fff",
        bottombarHoverBg: "#1b222f",
        scrollbarTrackBg: "#011627",
        scrollbarThumbBg: "#043254",
        articleBg: "#031d33",
      },
      twilight: {
        mainBg: "#1e1e1e",
        bgText: "#2a2a2a",
        textColor: "#d4d4d4",
        accentColor: "#7181ac",
        titlebarBg: "#1a1a1a",
        sidebarBg: "#1e1e1e",
        sidebarHoverBg: "#2a2a2a",
        explorerBg: "#1e1e1e",
        explorerHoverBg: "#2a2a2a",
        explorerBorder: "transparent",
        tabsBg: "#1e1e1e",
        tabBg: "#1a1a1a",
        tabActiveBg: "#2a2a2a",
        tabBorder: "#1a1a1a",
        bottombarBg: "#1e1e1e",
        bottombarBorder: "#2a2a2a",
        buttonBg: "#7181ac",
        buttonText: "#1e1e1e",
        bottombarHoverBg: "#2a2a2a",
        scrollbarTrackBg: "#1e1e1e",
        scrollbarThumbBg: "#2a2a2a",
        articleBg: "#1a1a1a",
    },
    oceanic: {
      mainBg: "#1b2b34",
      bgText: "#2c3e50",
      textColor: "#c0c5ce",
      accentColor: "#89b6e2",
      titlebarBg: "#1a2832",
      sidebarBg: "#1b2b34",
      sidebarHoverBg: "#2c3e50",
      explorerBg: "#1b2b34",
      explorerHoverBg: "#2c3e50",
      explorerBorder: "transparent",
      tabsBg: "#1b2b34",
      tabBg: "#1a2832",
      tabActiveBg: "#2c3e50",
      tabBorder: "#1a2832",
      bottombarBg: "#1b2b34",
      bottombarBorder: "#2c3e50",
      buttonBg: "#89b6e2",
      buttonText: "#1b2b34",
      bottombarHoverBg: "#2c3e50",
      scrollbarTrackBg: "#1b2b34",
      scrollbarThumbBg: "#2c3e50",
      articleBg: "#1a2832",
    },
    pinkishDarkTheme: {
      mainBg: "#2a1a26",
      bgText: "#3b2736",
      textColor: "#e0d2e3",
      accentColor: "#d18eab",
      titlebarBg: "#2f1d2b",
      sidebarBg: "#2a1a26",
      sidebarHoverBg: "#3b2736",
      explorerBg: "#2a1a26",
      explorerHoverBg: "#3b2736",
      explorerBorder: "#4c3342",
      tabsBg: "#2a1a26",
      tabBg: "#2f1d2b",
      tabActiveBg: "#4c3342",
      tabBorder: "#4c3342",
      bottombarBg: "#2a1a26",
      bottombarBorder: "#3b2736",
      buttonBg: "#d18eab",
      buttonText: "#2a1a26",
      bottombarHoverBg: "#b56b88",
      scrollbarTrackBg: "#2a1a26",
      scrollbarThumbBg: "#3b2736",
      articleBg: "#352237",
      extItemBg: "#2f1d2b",
      extItemText: "#e0d2e3",
      extItemHoverBg: "#4c3342",
    },
      customDarkTheme: {
        mainBg: "#122738",
        bgText: "#193549",
        textColor: "#ffc600",
        accentColor: "#ff0088",
        titlebarBg: "#1F4662",
        sidebarBg: "#193549",
        sidebarHoverBg: "#1F4662",
        explorerBg: "#193549",
        explorerHoverBg: "#1F4662",
        explorerBorder: "#234E6D",
        tabsBg: "#193549",
        tabBg: "#1F4662",
        tabActiveBg: "#234E6D",
        tabBorder: "#234E6D",
        bottombarBg: "#193549",
        bottombarBorder: "#1F4662",
        buttonBg: "#ff9d00",
        buttonText: "#122738",
        bottombarHoverBg: "#ff628c",
        scrollbarTrackBg: "#193549",
        scrollbarThumbBg: "#1F4662",
        articleBgLight: "#234E6D",
        articleBgMedium: "#1F4662",
        articleBgDark: "#193549",
        // Extension items with specified colors
        extItemBg: "#122738",
        extItemText: "#ffc600",
        extItemHoverBg: "#234E6D",
    },
    }),
  ],
};
