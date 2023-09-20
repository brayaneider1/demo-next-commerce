import { FunctionComponent } from 'react';
import Head from 'next/head';
import { EuiSpacer } from '@elastic/eui';
import HomeHero from '../components/starter/home_hero';
import Wrapper from '../components/starter/wrapper';
import HomeTemplates from '../components/starter/home_templates';
import HomeWhy from '../components/starter/home_why';
import commerce from '../lib/commerce';

export async function getStaticProps({}) {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

const Index: FunctionComponent = ({ merchant, categories, products }: any) => {
  return (
    <>
{/*       <Head>
        <title>Home</title>
      </Head> */}

      <Wrapper>
        <HomeHero merchant={merchant} />


        <HomeWhy categories={categories} />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <HomeTemplates products={products} />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
      </Wrapper>
    </>
  );
};

export default Index;
