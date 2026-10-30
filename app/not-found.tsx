import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Prose from "@/components/Prose";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Prose>
          <p>
            Nothing here. <Link href="/">Home is this way.</Link>
          </p>
        </Prose>
      </main>
      <Footer />
    </>
  );
}
