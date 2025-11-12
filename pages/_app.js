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
                    <title>Expert Engineering Solutions for Marine and Industrial Needs | Apurva Engineering</title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="title" content="Expert Engineering Solutions for Marine and Industrial Needs | Apurva Engineering" />
                    <meta name="description" content="Apurva Engineering offers comprehensive solutions for marine and industrial engine repairs, steering marine systems, hydraulic systems, marine transmissions, windlass servicing, valves, pumps, pipeline services, and manufacturing of equipment spares including hydraulic jacks, power packs, cylinders, control valves, and more. Trusted brands like ZF, Kirloskar, FADA, and Advance. Contact us for reliable and efficient services."/>
                    <meta name="keywords" content="Apurva Engineering;marine and industrial engine repairs; Marine engine repairs;Industrial engine repairs;Steering marine system maintenance;Hydraulic system servicing;
                        Marine transmissions repair;Windlass servicing;Valve and pump maintenance;Pipeline services;
                        Equipment spares manufacturing;Hydraulic jacks repair;Hydraulic power packs maintenance;
                        Hydraulic cylinders servicing;Direction control valves repair;Unloader valves maintenance;
                        Motors and pumps servicing;ZF transmission repairs;Kirloskar pneumatic services;
                        FADA equipment maintenance;Advance machinery servicing;Marine and industrial engineering solutions" 
                        />
                    <meta name="author" content="Apurva Engineering, Goa" />
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