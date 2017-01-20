// import * as types from '../../../../src/client/actions/ActionTypes';

const registerActionSuccessFixtures = [
  {
    type: types.REGISTER_USER_REQUEST,
    body: {
      name: 'John Doe',
      email: 'jdoe@example.com',
      username: 'jaydee',
      password: 'password123',
      passwordconfirmation: 'password123',
    },
  },
  {
    type: types.REGISTER_USER_SUCCESS,
    status: 'success',
  },
];

const registerActionFailureFixtures = [
  {
    type: types.REGISTER_USER_REQUEST,
    body: {
      name: 'John Doe',
      email: 'jdoe@example.com',
      username: 'jaydee',
      password: 'password123',
      passwordconfirmation: 'password123',
    },
  },
  {
    type: types.REGISTER_USER_FAILURE,
    status: 'failure',
  },
];

const registerMockActionPayload = {
  type: types.REGISTER_USER_REQUEST,
  body: {
    name: 'John Doe',
    email: 'jdoe@example.com',
    username: 'jaydee',
    password: 'password123',
    passwordconfirmation: 'password123',
  },
};

module.exports = {
  registerActionSuccessFixtures,
  registerActionFailureFixtures,
  registerMockActionPayload,
};
