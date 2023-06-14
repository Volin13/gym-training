import { ReactComponent as UserIcon } from '../../../assets/images/MediaIcons/user.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/MediaIcons/mail.svg';

const switchImages = name => {
  switch (name) {
    case 'text':
      return <UserIcon />;

    case 'email':
      return <MailIcon />;

    default:
      return <UserIcon />;
  }
};

export default switchImages;
