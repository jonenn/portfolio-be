import type { Schema, Struct } from '@strapi/strapi';

export interface CommonComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_common_components_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    buttonText1: Schema.Attribute.String;
    buttonText2: Schema.Attribute.String;
    buttonUrl1: Schema.Attribute.String;
    buttonUrl2: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PortfolioProjectcard extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_projectcards';
  info: {
    displayName: 'projectcard';
  };
  attributes: {
    deploymentLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    designLink: Schema.Attribute.String;
    label1: Schema.Attribute.String;
    label2: Schema.Attribute.String;
    tech1: Schema.Attribute.Component<'stack.tech-item', true>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface StackTechItem extends Struct.ComponentSchema {
  collectionName: 'components_stack_tech_items';
  info: {
    displayName: 'techItem';
  };
  attributes: {
    icon: Schema.Attribute.String;
    iconsm: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface TechblockTechStackBlock extends Struct.ComponentSchema {
  collectionName: 'components_techblock_tech_stack_blocks';
  info: {
    displayName: 'TechStackBlock';
  };
  attributes: {
    tech: Schema.Attribute.Component<'stack.tech-item', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common-components.hero': CommonComponentsHero;
      'portfolio.projectcard': PortfolioProjectcard;
      'stack.tech-item': StackTechItem;
      'techblock.tech-stack-block': TechblockTechStackBlock;
    }
  }
}
