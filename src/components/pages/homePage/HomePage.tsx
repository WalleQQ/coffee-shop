import React from 'react';
import { Discount } from '../../blocks/discount/Discount';
import { OurCatalogs } from '../../blocks/out-catalogs/OurCatalogs';
import { Promo } from '../../blocks/promo/Promo';

export const HomePage = () => {
  return (
    <>
      <Promo />
      <OurCatalogs />
      <Discount />
    </>
  );
};
