/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import AddressListHead from '../components/AddressListHead';
import AddressLitem from '../components/AddressListItem';
import AddressGuideBox from '../components/AddressGuideBox';
import { Color } from '../styles';
import { useAddress } from '../lib/hooks';
import { removeAddress } from '../lib/apis';

export default function AddressPage() {
  const { addresses, defaultAddressId } = useAddress();
  return (
    <Fragment>
      <AddressListHead handleAdd={() => {}} />
      <List>
        {addresses.map((address) => (
          <AddressLitem
            key={address.id}
            {...address}
            handleRemove={() => removeAddress(address.id)}
            handleSetDefault={(id: number) => {}}
            isDefault={address.id === defaultAddressId}
          />
        ))}
      </List>
      <Footer>
        <AddressGuideBox />
      </Footer>
    </Fragment>
  );
}

const List = styled.ul`
  border-top: 1px solid ${Color.Grey8C};
  border-bottom: 1px solid ${Color.Grey8C};
`;

const Footer = styled.footer`
  margin: 30px 20px 71px 20px;
`;
