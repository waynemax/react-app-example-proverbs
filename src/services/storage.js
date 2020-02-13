export function set(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {}
}

export function get(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

export function clear() {
  try {
    localStorage.clear();
  } catch (error) {}
}