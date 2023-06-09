import MainView from "@/pages/MainView";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#ffae23" />
                <meta name="theme-color" content="#ffae23" />
                <title>Emmanuel - Frontend dev</title>
            </Head>
            <MainView />
        </>
    );
}
