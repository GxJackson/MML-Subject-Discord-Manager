import type { Schema, Attribute } from '@strapi/strapi';

export interface WeeksWeeks extends Schema.Component {
  collectionName: 'components_weeks_weeks';
  info: {
    displayName: 'Weeks';
    icon: 'clock';
  };
  attributes: {
    Week_Number: Attribute.Integer;
    Tutorial_Time: Attribute.DateTime;
    Repeat_Tutorial_Time: Attribute.DateTime;
  };
}

export interface DiscordPostDiscordPost extends Schema.Component {
  collectionName: 'components_discord_post_discord_posts';
  info: {
    displayName: 'Discord Post';
    icon: 'message';
  };
  attributes: {
    Post_Format: Attribute.RichText;
    Post_Message_ID: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'weeks.weeks': WeeksWeeks;
      'discord-post.discord-post': DiscordPostDiscordPost;
    }
  }
}
