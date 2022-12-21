import React from 'react';
import Channel from '../../assets/channel.svg';
import Studio from '../../assets/studio.svg';
import Account from '../../assets/account.svg';
import SignOut from '../../assets/signout.svg';
import Purchases from '../../assets/purchases.svg';
import Data from '../../assets/data.svg';
import Theme from '../../assets/theme.svg';
import Language from '../../assets/language.svg';
import Restriction from '../../assets/restriction.svg';
import Location from '../../assets/location.svg';
import Keyboard from '../../assets/keyboard.svg';
import Settings from '../../assets/settings.svg';
import Help from '../../assets/help.svg';
import Next from '../../assets/next.svg';
import Feedback from '../../assets/feedback.svg';

const Profile = () => {
  const profileMenuArr = [
    {
      id: 1,
      image: Channel,
      text: 'Your channel',
      next: false,
      line: false,
    },
    {
      id: 2,
      image: Studio,
      text: 'Youtube Studio',
      next: false,
      line: false,
    },
    {
      id: 3,
      image: Account,
      text: 'Switch account',
      next: true,
      line: false,
    },
    {
      id: 4,
      image: SignOut,
      text: 'Sign out',
      next: false,
      line: true,
    },
    {
      id: 5,
      image: Purchases,
      text: 'Purchases and memberships',
      next: false,
      line: false,
    },
    {
      id: 6,
      image: Data,
      text: 'Your data in Youtube',
      next: false,
      line: true,
    },
    {
      id: 7,
      image: Theme,
      text: 'Appearance: Device theme',
      next: true,
      line: false,
    },
    {
      id: 8,
      image: Language,
      text: 'Language: English',
      next: true,
      line: false,
    },
    {
      id: 9,
      image: Restriction,
      text: 'Restricted Mode: Off',
      next: true,
      line: false,
    },
    {
      id: 10,
      image: Location,
      text: 'Location: Nigeria',
      next: true,
      line: false,
    },
    {
      id: 11,
      image: Keyboard,
      text: 'Keyboard shortcuts',
      next: false,
      line: true,
    },
    {
      id: 12,
      image: Settings,
      text: 'Settings',
      next: false,
      line: true,
    },
    {
      id: 13,
      image: Help,
      text: 'Help',
      next: false,
      line: false,
    },
    {
      id: 11,
      image: Feedback,
      text: 'Send feedback',
      next: false,
      line: false,
    },
  ];
  return profileMenuArr.map((profileMenu) => {
    const { id, image, text, next, line } = profileMenu;
    return (
      <>
        <div key={id} className='item'>
          <div className='sidenav-icon'>
            <img src={image} alt='icon' />
          </div>
          <div className='sidenav-text'>
            {text}
            {next ? (
              <div className='right'>
                <div className='next'>
                  <img src={Next} alt='next' />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {line ? <hr /> : null}
      </>
    );
  });
};

export default Profile;
