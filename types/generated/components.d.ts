import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBanner extends Schema.Component {
  collectionName: 'components_helpers_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttonText: Attribute.String;
    bannerImage: Attribute.Media;
    buttonLink: Attribute.String;
  };
}

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

export interface HelpersSocialMedia extends Schema.Component {
  collectionName: 'components_helpers_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'twitter';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    socialLink: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.banner': ComponentsBanner;
      'header.navigation-menu': HeaderNavigationMenu;
      'helpers.position': HelpersPosition;
      'helpers.social-media': HelpersSocialMedia;
    }
  }
}
