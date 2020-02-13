import vkConnect from '@vkontakte/vkui-connect/index';
import * as storage from '../services/storage';

const LIGHT = 'app_light';
const DARK = 'app_dark';
const STORAGE_THEME = 'app_theme';

export function themeInit(theme) {
  let storageTheme = storage.get(STORAGE_THEME);
  if (storageTheme === LIGHT || storageTheme === DARK) {
    setTheme(storageTheme);
  }
}

export function themeIsInited() {
  let storageTheme = storage.get(STORAGE_THEME);
  return storageTheme === LIGHT || storageTheme === DARK;
}

export function getTheme() {
  let storageTheme = storage.get(STORAGE_THEME);
  if (storageTheme === LIGHT || storageTheme === DARK) {
    return storageTheme;
  } else {
    return LIGHT;
  }
}

export function themeIsDark() {
  return getTheme() === DARK;
}

export function setTheme(theme) {
  switch (theme) {
    default:
    case LIGHT:
      if (document.body.classList.contains(DARK)) {
        document.body.classList.remove(DARK);
      }
      if (!document.body.classList.contains(LIGHT)) {
        document.body.classList.add(LIGHT);
      }
      storage.set(STORAGE_THEME, LIGHT);
      setStatusBarColor(LIGHT);
      break;
    case DARK:
      if (document.body.classList.contains(LIGHT)) {
        document.body.classList.remove(LIGHT);
      }
      if (!document.body.classList.contains(DARK)) {
        document.body.classList.add(DARK);
      }
      storage.set(STORAGE_THEME, DARK);
      setStatusBarColor(DARK);
      break;
  }
}

export function setStatusBarColor(theme) {
  switch (theme) {
    case LIGHT:
      vkConnect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#fff"});
      break;
    case DARK:
      vkConnect.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000"});
      break;
    default: break;
  }
}
