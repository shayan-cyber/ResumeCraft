import "@/styles/globals.css";
import { Toaster, toast } from 'sonner'
import { ClerkProvider } from "@clerk/nextjs";
export default function App({ Component, pageProps }) {
  return(
    <>
      <ClerkProvider>

        <Toaster position="bottom-left" richColors/>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}
