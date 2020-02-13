const PLATFORM_PARAM = 'vk_platform';
const MOBILE_WEB = 'mobile_web';

const mvkScrollHelper = appContainerNode => {
  if (appContainerNode == null) {
    return;
  }

  const isMobileWeb = window.location.search.indexOf(`${PLATFORM_PARAM}=${MOBILE_WEB}`) > -1;
  const { userAgent } = window.navigator;

  if ((userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) && isMobileWeb) {
    appContainerNode.style.overflowY = 'scroll';
    appContainerNode.style.webkitOverflowScrolling = 'touch';

    document.documentElement.style.maxWidth = '100vw';
    document.body.style.maxWidth = '100vw';
    appContainerNode.style.maxWidth = '100vw';
  }
};

export default mvkScrollHelper;