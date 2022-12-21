import Home from '../assets/home.svg';
import Shorts from '../assets/shorts.svg';
import Subscription from '../assets/subscription.svg';
import History from '../assets/history.svg';
import Videos from '../assets/videos.svg';
import WatchLater from '../assets/watch-later.svg';
import ShowMore from '../assets/show-more.svg';

export const topNavLinks = [
  {
    id: 1,
    image: Home,
    link: '/youtube_clone',
    text: 'Home',
  },
  {
    id: 2,
    image: Shorts,
    link: '/',
    text: 'Shorts',
  },
  {
    id: 3,
    image: Subscription,
    link: '/',
    text: 'Subscriptions',
  },
];

export const bottomNavLinks = [
  {
    id: 1,
    image: History,
    link: '/',
    text: 'History',
  },
  {
    id: 2,
    image: Videos,
    link: '/',
    text: 'Your videos',
  },
  {
    id: 3,
    image: WatchLater,
    link: '/',
    text: 'Watch later',
  },
  {
    id: 4,
    image: ShowMore,
    link: '/',
    text: 'Show More',
  },
];