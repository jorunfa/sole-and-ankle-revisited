import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <BreadcrumbsWrapper>{breadcrumbs}</BreadcrumbsWrapper>
        <Header>
          <Title>Running</Title>
          <StyledSelect
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </StyledSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        {breadcrumbs} 
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const StyledSelect = styled(Select)`
    display: none;
    @media ${QUERIES.tabletAndUp} {
      display: flex;
    }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const breadcrumbs = <Breadcrumbs>
  <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
  <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
  <Breadcrumbs.Crumb href="/sale/shoes">
    Shoes
  </Breadcrumbs.Crumb>
</Breadcrumbs>;

const BreadcrumbsWrapper = styled.div`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

export default ShoeIndex;
