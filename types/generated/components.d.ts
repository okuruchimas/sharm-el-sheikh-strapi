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
    bannerImage: Attribute.Media & Attribute.Required;
    buttonLink: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface ComponentsEntertainmentService extends Schema.Component {
  collectionName: 'components_components_entertainment_services';
  info: {
    displayName: 'Entertainment Service';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    serviceName: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    place: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsWorkSchedule extends Schema.Component {
  collectionName: 'components_components_work_schedules';
  info: {
    displayName: 'Work Schedule';
    icon: 'calendar';
  };
  attributes: {
    dayOfWeek: Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    > &
      Attribute.Required;
    timeSlots: Attribute.Component<'helpers.time-slot', true> &
      Attribute.Required;
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
    image: Attribute.Media & Attribute.Required;
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

export interface HelpersStringArray extends Schema.Component {
  collectionName: 'components_helpers_string_arrays';
  info: {
    displayName: 'stringArray';
    icon: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
  };
}

export interface HelpersTimeSlot extends Schema.Component {
  collectionName: 'components_helpers_time_slots';
  info: {
    displayName: 'Time Slot';
    icon: 'clock';
  };
  attributes: {
    startTime: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'00:00'>;
    endTime: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'00:00'>;
  };
}

export interface HelpersWeekDay extends Schema.Component {
  collectionName: 'components_helpers_week_days';
  info: {
    displayName: 'Week Day';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    day: Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.banner': ComponentsBanner;
      'components.entertainment-service': ComponentsEntertainmentService;
      'components.work-schedule': ComponentsWorkSchedule;
      'header.navigation-menu': HeaderNavigationMenu;
      'helpers.position': HelpersPosition;
      'helpers.social-media': HelpersSocialMedia;
      'helpers.string-array': HelpersStringArray;
      'helpers.time-slot': HelpersTimeSlot;
      'helpers.week-day': HelpersWeekDay;
    }
  }
}
