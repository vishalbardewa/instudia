/* eslint-disable @next/next/no-script-component-in-head */
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const GA_MEASUREMENT_ID = 'UA-232483046-1';

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta
          name="facebook-domain-verification"
          content="urvbmhyylbha59lj50184veppyr476"
        />
        <title>{props.title}</title>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', "${GA_MEASUREMENT_ID}");
          `}
        </Script>
      </Head>
      <NextSeo
        // title={props.title}
        // description={props.description}
        canonical={`${AppConfig.canonicalBase}${router.asPath}`}
        openGraph={{
          title: props.title,
          description: props.description,
          url: `${AppConfig.canonicalBase}${router.asPath}`,
          locale: AppConfig.locale,
          siteName: AppConfig.site_name,
          images: [
            {
              url: 'https://res.cloudinary.com/dhwg77gwm/image/upload/f_auto,q_auto/v1/instudia/tqo7qzztc4duzktj0jt9',
              width: 800,
              height: 600,
              type: 'image/jpeg',
              alt: 'Upskill with instudia',
            },
            {
              url: 'https://res.cloudinary.com/dhwg77gwm/image/upload/f_auto,q_auto/v1/instudia/qzmdhewkbsyxmwsjccnu',
              width: 800,
              height: 600,
              alt: 'Enroll with instudia',
              type: 'image/jpeg',
            },
          ],
        }}
        titleTemplate="%s | instudia"
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
    </>
  );
};

export { Meta };
