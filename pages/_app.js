import "@/styles/globals.css";
import { Toaster, toast } from 'sonner'
import { ClerkProvider } from "@clerk/nextjs";
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
  return(
    <>
      <ClerkProvider>
        <NextNProgress color="#4b76d2" height={4} />
        <Toaster position="bottom-left" richColors/>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}
