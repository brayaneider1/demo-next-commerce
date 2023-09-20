import { FunctionComponent } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSpacer,
  EuiText,
  useEuiTheme,
  EuiPanel,
  EuiButtonEmpty,
} from '@elastic/eui';
import Image from 'next/image';
import Link from 'next/link';
import { imageLoader } from '../../lib/loader';
import { useTheme } from '../theme';
import { homeTemplates } from './home_templates.styles';
import Pattern1 from '../../../public/images/patterns/pattern-1.svg';
import Pattern2Light from '../../../public/images/patterns/pattern-2-light.svg';
import Pattern2Dark from '../../../public/images/patterns/pattern-2-dark.svg';
import commerce from '../../lib/commerce';
const HomeTemplates: any = ({ products }) => {
  const addToCart = id => {
    commerce.cart.add(id, 1).then(response => alert('Producto agregado'));
  };

  const { colorMode } = useTheme();
  const { euiTheme } = useEuiTheme();

  const Pattern2 = colorMode === 'dark' ? Pattern2Dark : Pattern2Light;

  const styles = homeTemplates(euiTheme);

  const circles = (
    <>
      <span css={styles.circle1}>
        <Image
          width={165 / 2}
          height={130 / 2}
          src={Pattern1}
          alt=""
          loader={imageLoader}
        />
      </span>
      <span css={styles.circle2}>
        <Image
          width={165 / 2}
          height={130 / 2}
          src={Pattern2}
          alt=""
          loader={imageLoader}
        />
      </span>
    </>
  );

  return (
    <>
      <EuiTitle size="l">
        <h2>Listado de productos</h2>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiText>
        <p>
          Aquí encontraras el listado de los productos disponibles en nuestra
          tienda.
        </p>
      </EuiText>

      <EuiSpacer size="xxl" />

      <EuiFlexGroup wrap gutterSize="xl">
        {products?.map(item => (
          <EuiFlexItem>
            <EuiPanel color="transparent" hasBorder css={styles.panel}>
              {circles}
              <div css={styles.panelInner}>
                <EuiTitle size="s">
                  <h3>{item.name}</h3>
                </EuiTitle>
                <EuiSpacer size="s" />
                <EuiText grow={false}>
                  <p>{item.description}</p>
                  <p>{item.price.formatted_with_symbol}</p>

                  <EuiButtonEmpty
                    onClick={() => addToCart(item.id)}
                    flush="both">
                    <strong>Agregar al carrito</strong>
                  </EuiButtonEmpty>
                </EuiText>
              </div>
            </EuiPanel>
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    </>
  );
};

export default HomeTemplates;
