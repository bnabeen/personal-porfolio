import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact & Connect | Nabeen Budha",
  description: "Get in touch with Nabeen Budha to discuss AI, marketing, content systems, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="wrap page-container" style={{ paddingBottom: "128px" }}>
      <ContactSection />
    </div>
  );
}
