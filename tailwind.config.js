/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#EFECEC",

                    secondary: "#FFB0B0",

                    accent: "#FC6736",

                    neutral: "#f3f4f6",

                    "base-100": "#0C2D57    ",

                    info: "#2559cd",

                    success: "#46d291",

                    warning: "#c49812",

                    error: "#ea718b",
                },
            },
            "bumblebee",
        ],
    },
    plugins: [require("daisyui")],
};
