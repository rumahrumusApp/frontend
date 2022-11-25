import '../styles/globals.css'
import {BrowserRouter, Routes, Route} from "react-dom";
import CreateRumus from './createrumus';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

  // return (
  //   <BrowserRouter>
  //   <Routers>
  //     <Route path="/" element={<createrumus/>} />

  //     </Routers>
  //     </BrowserRouter>
  // );
}

export default MyApp
