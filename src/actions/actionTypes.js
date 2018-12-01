const actionTypes = {
  // Redux Actions
};

Object.keys(actionTypes).forEach(type => {
  actionTypes[type].SUCESS = `${type}_SUCCESS`;
  actionTypes[type].ERROR = `${type}_ERROR`;
  actionTypes[type].IN_PROGRESS = `${type}_IN_PROGRESS`;
});

actionTypes.CLEAR_STATE = 'CLEAR_STATE';

export default actionTypes;
