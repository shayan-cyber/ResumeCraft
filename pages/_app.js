import "@/styles/globals.css";
import { Toaster, toast } from 'sonner'
export default function App({ Component, pageProps }) {
  return(
    <>
      <Toaster position="bottom-right"/>
       <Component {...pageProps} />
    </>
  );
}
