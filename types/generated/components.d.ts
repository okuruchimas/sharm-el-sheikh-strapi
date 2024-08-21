import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAnnouncement extends Schema.Component {
  collectionName: 'components_components_announcements';
  info: {
    displayName: 'Announcement';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    socialLinkls: Attribute.Component<'helpers.social-media', true>;
  };
}

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
    socialLink: Attribute.String & Attribute.Required;
    socialMediaName: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.announcement': ComponentsAnnouncement;
      'components.banner': ComponentsBanner;
      'header.navigation-menu': HeaderNavigationMenu;
      'helpers.position': HelpersPosition;
      'helpers.social-media': HelpersSocialMedia;
    }
  }
}
