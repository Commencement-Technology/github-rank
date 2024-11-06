import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="h-full">
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
