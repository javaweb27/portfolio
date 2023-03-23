import type { ProjectItemModel } from '../ProjectItem'
import onlineShopSrc from '../../assets/online-shop.jpg'
import messagingAppSrc from '../../assets/messaging-app.jpg'
import platziMokeponGameSrc from '../../assets/platzi-mokepon-game.jpg'
import portfolioSrc from '../../assets/portfolio.jpg'

export const projectsListData: ProjectItemModel[] = [
  {
    imgSrc: onlineShopSrc,
    name: 'online-shop',
    links: {
      demo: 'https://javaweb27.github.io/online-shop',
      sourceCode: 'https://github.com/javaweb27/online-shop',
    },
    techs: {
      frontend: ['React', 'Vitest', 'TypeScript'],
      backend: ['Express (Node.js)', 'Mongoose (MongoDB)'],
    },
  },
  {
    imgSrc: messagingAppSrc,
    name: 'messaging-app',
    links: {
      demo: 'https://javaweb27.github.io/messaging-app',
      sourceCode: 'https://github.com/javaweb27/messaging-app',
    },
    techs: {
      frontend: ['React', 'Vitest', 'TypeScript'],
      backend: ['Express (Node.js)', 'Mongoose (MongoDB)', 'TypeScript'],
    },
  },
  {
    imgSrc: platziMokeponGameSrc,
    name: 'platzi-mokepon-game',
    links: {
      demo: 'https://javaweb27.github.io/platzi-mokepon-game',
      sourceCode: 'https://github.com/javaweb27/platzi-mokepon-game',
    },
    techs: {
      frontend: ['Vanilla', 'TypeScript'],
      backend: ['Express (Node.js)', 'TypeScript'],
    },
  },
  {
    imgSrc: portfolioSrc,
    name: 'portfolio',
    links: null,
    techs: {
      frontend: ['Vue', 'TypeScript'],
      backend: [],
    },
  },
]
