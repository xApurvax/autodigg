import { Provider } from 'react-redux'
import '../styles/globals.css'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import store from '../Redux-store/store';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store} >
    <div className='max-w-[1520px] mx-auto'>
       <Navbar />
       <Component {...pageProps} />
       <Footer />
    </div>
    </Provider>
  )
}

export default MyApp;
