
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
				// Premium luxury color palette
				platinum: {
					50: '#fefefe',
					100: '#fdfdfd',
					200: '#f8f8f8',
					300: '#e8e8e8',
					400: '#d1d1d1',
					500: '#b8b8b8',
					600: '#9a9a9a',
					700: '#7c7c7c',
					800: '#5e5e5e',
					900: '#404040'
				},
				midnight: {
					50: '#f8f9fa',
					100: '#f1f3f4',
					200: '#e8eaed',
					300: '#dadce0',
					400: '#bdc1c6',
					500: '#9aa0a6',
					600: '#80868b',
					700: '#5f6368',
					800: '#3c4043',
					900: '#1a1a1b',
					950: '#0f0f10'
				},
				gold: {
					50: '#fdfcf8',
					100: '#faf8f1',
					200: '#f4f0e1',
					300: '#e8ddc7',
					400: '#d6c49a',
					500: '#c8ad7d',
					600: '#b8956b',
					700: '#9c7d58',
					800: '#82674a',
					900: '#6b543f'
				},
				champagne: {
					50: '#fefdfb',
					100: '#fdfaf5',
					200: '#faf5ea',
					300: '#f4ecd8',
					400: '#e9d9bc',
					500: '#ddc49e',
					600: '#ceab82',
					700: '#ba926a',
					800: '#9a7858',
					900: '#7f624a'
				},
				charcoal: {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#202020',
					950: '#101010'
				},
				pearl: '#fdfcfb',
				whatsapp: '#25D366'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'shine': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'counter': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'loading-dots': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'shine': 'shine 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'counter': 'counter 0.3s ease-out',
				'loading-dots': 'loading-dots 1.5s infinite ease-in-out'
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(135deg, #c8ad7d 0%, #d6c49a 50%, #e8ddc7 100%)',
				'champagne-gradient': 'linear-gradient(135deg, #ddc49e 0%, #e9d9bc 50%, #f4ecd8 100%)',
				'midnight-gradient': 'linear-gradient(135deg, #0f0f10 0%, #1a1a1b 50%, #3c4043 100%)',
				'platinum-gradient': 'linear-gradient(135deg, #e8e8e8 0%, #f8f8f8 100%)',
				'hero-overlay': 'linear-gradient(135deg, rgba(15,15,16,0.85) 0%, rgba(26,26,27,0.7) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
