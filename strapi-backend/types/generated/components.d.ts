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

export interface DiscordTemplatesWeeklyTutorialTimesTemplate
  extends Schema.Component {
  collectionName: 'components_discord_templates_weekly_tutorial_times_templates';
  info: {
    displayName: 'Weekly Tutorial Times Template';
    icon: 'clock';
  };
  attributes: {
    message_template: Attribute.RichText;
  };
}

export interface DiscordTemplatesMessageTemplate extends Schema.Component {
  collectionName: 'components_discord_templates_message_templates';
  info: {
    displayName: 'Message Template';
    icon: 'discuss';
  };
  attributes: {
    post_format: Attribute.RichText;
    post_message_id: Attribute.BigInteger;
  };
}

export interface DiscordTemplatesDiscordTemplates extends Schema.Component {
  collectionName: 'components_discord_templates_discord_posts';
  info: {
    displayName: 'Subject Channel Template';
    icon: 'message';
    description: '';
  };
  attributes: {
    subject_channel_name: Attribute.String;
    subject_channel_topic: Attribute.String;
    archived_channel_name: Attribute.String;
    current_discord_subject_channel_id: Attribute.BigInteger;
    previous_discord_subject_channel_id: Attribute.BigInteger;
    Weekly_Tutorial_Reminders_Message_Format: Attribute.RichText;
    Current_Subject_Channel_Webhook: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'weeks.weeks': WeeksWeeks;
      'discord-templates.weekly-tutorial-times-template': DiscordTemplatesWeeklyTutorialTimesTemplate;
      'discord-templates.message-template': DiscordTemplatesMessageTemplate;
      'discord-templates.discord-templates': DiscordTemplatesDiscordTemplates;
    }
  }
}
