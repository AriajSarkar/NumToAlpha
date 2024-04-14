type ColorScheme = {
    background: string;
    text: string;
    border: string;
    placeholder: string;
};

type ColorsType = {
    dark: ColorScheme;
    light: ColorScheme;
};

const Colors: ColorsType = {
    dark: {
        background: '#121212',  // Very dark background typical for dark themes
        text: '#ffffff',        // White text color for readability in dark theme
        border: '#333333',      // Lighter dark color for borders that contrast with background
        placeholder: '#757575', // Placeholder text color for dark background inputs
    },
    light: {
        background: '#ffffff',  // Standard white background
        text: '#000000',        // Black text color for maximum contrast on light background
        border: '#cccccc',      // Light grey border for subtle separation
        placeholder: '#757575', // Placeholder text color for light background inputs
    }
};

export default Colors;