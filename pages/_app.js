import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css';
import '../public/css/global.css';
import '../public/css/plugin.css';
import '../public/css/templete.css';
import '../public/css/responsive.css';
import "swiper/css/bundle";
import Head from 'next/head';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import { withRouter, Router } from 'next/router'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import MainLayout from '../components/layout/MainLayout';
import PageLayout from '../components/layout/PageLayout';
import MainNavBarComponent from '../components/navigation/MainNavBarComponent';
import FooterComponent from '../components/footer/FooterComponent';

Router.events.on('routeChangeStart', (url) => {
    //console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);
    return (
        <>
            <PersistGate persistor={store.__persistor} >


                <MainLayout>
                    {/*nav*/}

                    <Head>
                    <link rel="icon" type="image/png" sizes="77x32" href="/favicon.png" />
                    <title>Wishwakarma Motor Works | Custom Vehicle Body Builders in Goa Since 1969</title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="title" content="Wishwakarma Motor Works | Custom Vehicle Body Builders in Goa Since 1969" />
                    <meta name="description" content="Wishwakarma Motor Works is a trusted vehicle body builder in Goa since 1969, offering custom auto body fabrication including mobile advertising vehicles, tanker bodies, tippers, container bodies, and machinery carriers with over 1000+ satisfied customers."/>
                    <meta name="keywords" content="Wishwakarma motor works; vehicle body builder in goa;
                     auto body building goa; custom vehicle body fabricatio; mobile advertising vehicle body;
                      tanker body manufacturer; septic tanker body; water tanker body; stainless steel water tanker;
                       mild steel water tanker; container body fabrication; earth moving machinery carrier;
                        ev rickshaw tipper body; truck body builders goa; commercial vehicle body works;
                         CMVR compliant vehicle bodies;" 
                        />
                    <meta name="author" content="Wishwakarma Motor Works, Goa" />
                    <meta name="revisit-after" content="15 days" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                   </Head>

                    
                    <MainNavBarComponent />

                    {/*<NavBarComponent/>*/}
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                    <FooterComponent />
                </MainLayout>
            </PersistGate>
        </>
    )
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
}
export default withRouter(wrapper.withRedux(MyApp))