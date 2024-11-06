import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { WEBSITE } from "@/constants";
import "../styles/globals.css";

export const metadata = {
  title: WEBSITE.title,
  description: WEBSITE.description,
  keywords: WEBSITE.keywords,
  openGraph: {
    title: WEBSITE.title,
    description: WEBSITE.description,
    images: [
      {
        url: "/path-to-image.jpg",
        width: 800,
        height: 600,
        alt: WEBSITE.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: WEBSITE.title,
    description: WEBSITE.description,
    images: ["/path-to-twitter-image.jpg"],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="w-full min-h-screen">
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
