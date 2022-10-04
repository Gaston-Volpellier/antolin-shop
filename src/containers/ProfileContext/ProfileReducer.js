export const ACTIONS = {
  TYPING: 'typing',
  SAVE: 'save',
  LOAD: 'load',
}

export const reducer = (profile, action) => {
  switch (action.type) {
    case ACTIONS.SAVE:
      return profile
    default:
      return profile
  }
}
