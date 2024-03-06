import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Eka Ferdiyanto | Graphic Designer ",
    description: "UI Web Designer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="bg-base-100" data-theme="mytheme">
            <body>
                {/* <Navbar /> */}
                {children}
            </body>
            {/* <Footer /> */}
        </html>
    );
}
