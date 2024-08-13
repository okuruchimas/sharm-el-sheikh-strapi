import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderNavigationMenu extends Schema.Component {
  collectionName: 'components_header_navigation_menus';
  info: {
    displayName: 'NavigationMenu';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface HelpersPosition extends Schema.Component {
  collectionName: 'components_helpers_positions';
  info: {
    displayName: 'Position';
    icon: 'collapse';
  };
  attributes: {
    lat: Attribute.String;
    lng: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.navigation-menu': HeaderNavigationMenu;
      'helpers.position': HelpersPosition;
    }
  }
}
