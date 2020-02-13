export function switchMatch(key, node) {
  const __DEFAULT__ = 'default';
  switch (typeof node) {
    case 'object': {
      switch (typeof key) {
        case 'boolean':
          return node[key];
        default:
        case 'string': {
          if (node.hasOwnProperty(key)) {
            return node[key];
          } else {
            if (node.hasOwnProperty(__DEFAULT__)) {
              switch (typeof node[__DEFAULT__]) {
                case 'function': {
                  return node[__DEFAULT__]();
                }
                default: return node[__DEFAULT__];
              }
            } else {
              return key;
            }
          }
        }
      }
    }
    default: break;
  }
}