import React from 'react';

import matter from 'gray-matter';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import PageLayout from '@/layout/PageLayout';

const ContentPage = (props: any) => {
  const { data, content } = matter(props.item);

  return (
    <PageLayout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="text-sm">
        <h2>{data.title}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps = async (context: any) => {
  // eslint-disable-next-line global-require
  const fs = require('fs');
  const { slug } = context.params;
  const item = fs.readFileSync(
    `${process.cwd()}/src/contents/${slug}.md`,
    'utf-8'
  );

  return {
    props: {
      item,
    },
  };
};

export default ContentPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'privacy-policy' } }, { params: { slug: 'tc' } }],
    fallback: false,
  };
}
