import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Contact | UI and Web Developer ",
    description: "UI Web Designer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-base-100" data-theme="mytheme">
            <div className="mx-32 mt-11">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}
