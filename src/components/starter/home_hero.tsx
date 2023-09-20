import { FunctionComponent } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiLink,
} from '@elastic/eui';
import HomeIllustration from './home_illustration';
import Link from 'next/link';
import { homeHeroStyles } from './home_hero.styles';
import { useEuiTheme } from '@elastic/eui';
import commerce from '../../lib/commerce';

export default function HomeHero(merchant) {
  console.log("🚀 ~ file: home_hero.tsx:17 ~ HomeHero ~ merchant:", merchant)
  const { euiTheme } = useEuiTheme();
  const styles = homeHeroStyles(euiTheme);

  const data = JSON.stringify(merchant, null, 2)
  console.log("🚀 ~ file: home_hero.tsx:22 ~ HomeHero ~ data:", data)

  return (
    <EuiFlexGroup alignItems="center" css={styles.container}>
      <EuiFlexItem>
        <EuiTitle size="l" css={styles.title}>
          <h1>{merchant?.merchant.data[0].name || 'Sin valor'}</h1>
        </EuiTitle>
        <EuiTitle size="s" css={styles.subtitle}>
        <h2>{merchant?.merchant.data[0].description || 'Sin valor'}</h2>
        </EuiTitle>

      </EuiFlexItem>
      <EuiFlexItem>
        <HomeIllustration image={merchant?.merchant.data[0].images.logo.url} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
