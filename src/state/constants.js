export const host = process.env.REACT_APP_HOST_URL || 'http://localhost:3000';

// Authorization actions
// credentials
export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
// login
export const LOGIN_REQUEST_PENDING = 'LOGIN_REQUEST_PENDING';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
// register
export const REGISTER_REQUEST_PENDING = 'REGISTER_REQUEST_PENDING';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';
export const REGISTER_REQUEST_FAILED = 'REGISTER_REQUEST_FAILED';
// get user
export const GET_USER_REQUEST_PENDING = 'GET_USER_REQUEST_PENDING';
export const GET_USER_REQUEST_SUCCESS = 'GET_USER_REQUEST_SUCCESS';
export const GET_USER_REQUEST_FAILED = 'GET_USER_REQUEST_FAILED';
// ----------------
// Load post list
export const GET_POSTS_REQUEST_PENDING = 'GET_POSTS_REQUEST_PENDING';
export const GET_POSTS_REQUEST_SUCCESS = 'GET_POSTS_REQUEST_SUCCESS';
export const GET_POSTS_REQUEST_FAILED = 'GET_POSTS_REQUEST_FAILED';
// Add post
export const ADD_POST_REQUEST_PENDING = 'ADD_POST_REQUEST_PENDING';
export const ADD_POST_REQUEST_SUCCESS = 'ADD_POST_REQUEST_SUCCESS';
export const ADD_POST_REQUEST_FAILED = 'ADD_POST_REQUEST_FAILED';
// Change input data
export const CHANGE_HEADER = 'CHANGE_HEADER';
export const CHANGE_BODY = 'CHANGE_BODY';