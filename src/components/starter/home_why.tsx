import { FunctionComponent } from 'react';
import {
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiLink,
} from '@elastic/eui';

const HomeWhy: any = ({categories}) => {
  console.log("🚀 ~ file: home_why.tsx:14 ~ categories:", categories)
  return (
    <>
      <EuiTitle size="l">
        <h2>Categorías</h2>
      </EuiTitle>

      <EuiSpacer size="m" />

      <EuiText grow={false}>
        <p>
          Aquí encontraras el listado de categorias disponibles.
        </p>
        
      </EuiText>

      <EuiSpacer size="xl" />

      <EuiFlexGroup>

        {categories?.map(item=>
              <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size="l" type="cheer" />}
                display="transparent"
                hasBorder
                title={item.name}
                description={item.description}
              />
            </EuiFlexItem>
          )}

      </EuiFlexGroup>
    </>
  );
};

export default HomeWhy;
