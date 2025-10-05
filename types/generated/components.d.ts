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

export interface ComponentsClickableService extends Schema.Component {
  collectionName: 'components_components_clickable_services';
  info: {
    displayName: 'clickable_service';
    icon: 'paint';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media;
  };
}

export interface ComponentsCompanyPageFields extends Schema.Component {
  collectionName: 'components_components_company_page_fields';
  info: {
    displayName: 'Company Page Fields';
    icon: 'file';
  };
  attributes: {
    youTubeVideoId: Attribute.String;
    contactLink: Attribute.String;
    contactText: Attribute.String;
  };
}

export interface ComponentsCompanySchedule extends Schema.Component {
  collectionName: 'components_components_company_schedules';
  info: {
    displayName: 'Company Schedule';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    days: Attribute.Component<'helpers.week-day', true> & Attribute.Required;
    workTime: Attribute.Component<'helpers.time-slot'> & Attribute.Required;
  };
}

export interface ComponentsDiscount extends Schema.Component {
  collectionName: 'components_components_discounts';
  info: {
    displayName: 'Discount';
    icon: 'gift';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    terms: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsEntertainmentService extends Schema.Component {
  collectionName: 'components_components_entertainment_services';
  info: {
    displayName: 'Entertainment Service';
    description: '';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
    serviceName: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    place: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    about: Attribute.RichText;
  };
}

export interface ComponentsHomeNavMenu extends Schema.Component {
  collectionName: 'components_components_home_nav_menus';
  info: {
    displayName: 'Home Nav Menu';
    icon: 'alien';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentsTeamMember extends Schema.Component {
  collectionName: 'components_components_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    profileImg: Attribute.Media & Attribute.Required;
    socialLink: Attribute.String;
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
  };
}

export interface HelpersLocationWithName extends Schema.Component {
  collectionName: 'components_helpers_location_with_names';
  info: {
    displayName: 'Location With Name';
    icon: 'globe';
  };
  attributes: {
    locationName: Attribute.String & Attribute.Required;
    coordinates: Attribute.Component<'helpers.position'>;
  };
}

export interface HelpersPosition extends Schema.Component {
  collectionName: 'components_helpers_positions';
  info: {
    displayName: 'Position';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    lat: Attribute.Float & Attribute.Required;
    lng: Attribute.Float & Attribute.Required;
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

export interface HelpersTextWithLink extends Schema.Component {
  collectionName: 'components_helpers_text_with_links';
  info: {
    displayName: 'Text With Link';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface HelpersTextWithTitle extends Schema.Component {
  collectionName: 'components_helpers_text_with_titles';
  info: {
    displayName: 'Text With Title';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
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
      'components.clickable-service': ComponentsClickableService;
      'components.company-page-fields': ComponentsCompanyPageFields;
      'components.company-schedule': ComponentsCompanySchedule;
      'components.discount': ComponentsDiscount;
      'components.entertainment-service': ComponentsEntertainmentService;
      'components.home-nav-menu': ComponentsHomeNavMenu;
      'components.team-member': ComponentsTeamMember;
      'components.work-schedule': ComponentsWorkSchedule;
      'header.navigation-menu': HeaderNavigationMenu;
      'helpers.location-with-name': HelpersLocationWithName;
      'helpers.position': HelpersPosition;
      'helpers.social-media': HelpersSocialMedia;
      'helpers.string-array': HelpersStringArray;
      'helpers.text-with-link': HelpersTextWithLink;
      'helpers.text-with-title': HelpersTextWithTitle;
      'helpers.time-slot': HelpersTimeSlot;
      'helpers.week-day': HelpersWeekDay;
    }
  }
}
