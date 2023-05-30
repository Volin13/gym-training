import { ReactComponent as InstagramIcon } from '../../../assets/images/MediaIcons/instagram-svgrepo-com.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/images/MediaIcons/twitter-154-svgrepo-com.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/MediaIcons/facebook-svgrepo-com.svg';
import { ReactComponent as TiktokIcon } from '../../../assets/images/MediaIcons/tiktok-fill-svgrepo-com.svg';

const switchSocialLinkIcon = name => {
  switch (name) {
    case 'facebook':
      return <FacebookIcon />;

    case 'twitter':
      return <TwitterIcon />;

    case 'instagram':
      return <InstagramIcon />;

    case 'tiktok':
      return <TiktokIcon />;

    default:
      return <InstagramIcon />;
  }
};

export default switchSocialLinkIcon;
