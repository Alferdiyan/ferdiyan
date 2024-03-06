import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import NavbarWorks from "@/components/NavbarWorks";
import GetInTouch from "@/components/button/GetInTouch";

export const metadata = {
    title: "Web Design | Eka Ferdiyanto",
    description: "Graphic and Web Designer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-base-100" data-theme="mytheme">
            <div className=" mt-11">
                <NavbarWorks />
                <div className="mx-11 mt-11 md:mt-20 md:mx-16">{children}</div>
                <ContactMe />
                <Footer />
            </div>
        </div>
    );
}
