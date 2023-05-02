import Head from "next/head";
import {Header} from '../components';

export const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="keywords" content="" />
                <title>Alfa Best</title>
            </Head>

            <Header/>

            <main>{children}</main>
            
        </>
    );
};
