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
                    primary: "#f3f4f6",

                    secondary: "#f59e0b",

                    accent: "#1d4ed8",

                    neutral: "#f3f4f6",

                    "base-100": "#000000",

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
