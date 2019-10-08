import store from '@/store';

export const isAuthorized = (to, from, next) => {
  if (store.state.user) {
    localStorage.setItem('token', 'token-text');
    next();
  } else {
    next({ name: 'login' });
  }
}