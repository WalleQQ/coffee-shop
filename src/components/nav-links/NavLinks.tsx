import React from 'react';
import { NavLinksList } from '../nav-links-list/NavLinksList';
import { UserNavigation } from '../user-navigation/UserNavigation';

export const NavLinks = () => {
  return (
    <>
      <NavLinksList />
      <UserNavigation />
    </>
  );
};
