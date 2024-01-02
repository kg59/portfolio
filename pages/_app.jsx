// Css
import '@/globals.css';

//Store
import { store } from '@/config/store'
import { Provider } from 'react-redux'

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
    return (<Provider store={store}><Component {...pageProps} /></Provider>)
}