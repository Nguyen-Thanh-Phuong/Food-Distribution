export interface ThemeInterface {
	borderRadius: string;
	scapingElement: string;

	colors: {
		main: string;
		secondary: string;
		white: string;
	};
	font: {
		fontMedium: string;
		normal: string;
		bold: string;
		fontLarge: string;
		fontFamily: string;
	};

	scaping: (num: number) => string;
}
export const light_theme = {};

const globalFont = {
	fontFamily: 'Montserrat Alternates',
	fontMedium: '14px',
	normal: '500',
	bold: 'bold',
	fontLarge: '18px',
};

export const myTheme: ThemeInterface = {
	borderRadius: '14px',
	scapingElement: '15px',
	colors: {
		main: '#DB5114',
		white: '#fff',
		secondary: '#fff',
	},
	font: {
		...globalFont,
	},
	scaping: (num: number) => `${num * 5}px`,
};
export const myThemeDark: ThemeInterface = {
	borderRadius: '14px',
	scapingElement: '15px',
	colors: {
		main: '#111',
		white: '#fff',
		secondary: '#fff',
	},
	font: {
		...globalFont,
	},
	scaping: (num: number) => `${num * 5}px`,
};
