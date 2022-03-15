import Head from 'next/head';

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Organize-se`}</title>
      </Head>

      {children}
    </>
  );
};

export default Page;
