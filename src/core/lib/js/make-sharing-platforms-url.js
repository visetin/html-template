const TG_SHARE_URL = 'https://t.me/share/url';
const WHATSAPP_SHARE_URL = 'https://api.whatsapp.com/send';

const makeSharingPlatformsUrl = (platform, link) => {
  switch (platform) {
    case 'tg':
      return`${TG_SHARE_URL}?text=${encodeURIComponent('')}&url=${encodeURIComponent(link)}`;
    case 'whatsapp':
      return `${WHATSAPP_SHARE_URL}?text=${encodeURIComponent(link)}`;
    case 'email':
      return `mailto:?subject=${encodeURIComponent('Поделиться ссылкой')}&body=${encodeURIComponent(link)}`;
    default:
      return '';
  }
};

export default makeSharingPlatformsUrl;
