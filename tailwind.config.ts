
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// InnovatExpo custom colors
				expo: {
					bg: "#121212",
					darkBlue: "#1A1A2E",
					cyan: "#00F0FF",
					purple: "#7B42F6",
					pink: "#FF2E63",
					lightGray: "#f0f0f0"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.5 },
				},
				glow: {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.7))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.9))' 
					},
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				shake: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(5deg)' },
					'50%': { transform: 'rotate(0deg)' },
					'75%': { transform: 'rotate(-5deg)' },
				},
				"flip-vertical": {
					'0%': { transform: 'rotateX(0)' },
					'100%': { transform: 'rotateX(180deg)' },
				},
				"flip-horizontal": {
					'0%': { transform: 'rotateY(0)' },
					'100%': { transform: 'rotateY(180deg)' },
				},
				"particle-move": {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(10px, 10px)' },
					'50%': { transform: 'translate(0, 20px)' },
					'75%': { transform: 'translate(-10px, 10px)' },
					'100%': { transform: 'translate(0, 0)' },
				},
				"scale-up": {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 6s ease-in-out infinite",
				"pulse": "pulse 2s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite",
				"bounce": "bounce 2s ease-in-out infinite",
				"shake": "shake 0.5s ease-in-out",
				"flip-vertical": "flip-vertical 0.6s ease-in-out",
				"flip-horizontal": "flip-horizontal 0.6s ease-in-out",
				"particle-move": "particle-move 10s ease-in-out infinite",
				"scale-up": "scale-up 2s ease-in-out infinite",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to right, rgba(26, 26, 46, 0.9), rgba(18, 18, 18, 0.9))',
				'tech-pattern': 'url("/tech-pattern.svg")'
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
