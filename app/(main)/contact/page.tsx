import ContactSection from "@/components/ContactSection";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Contact & Connect | Nabeen Budha",
  description: "Get in touch with Nabeen Budha to discuss AI, marketing, content systems, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="wrap page-container" style={{ paddingBottom: "128px" }}>
      <BackButton />
      <ContactSection />
    </div>
  );
}
