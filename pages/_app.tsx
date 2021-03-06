import {AppProps} from "next/app" 
import "../css/global.css"
import GlobalStyles from "../components/GlobalStyles"

 
 function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    )
  }

  export default MyApp