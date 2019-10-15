export default {
  defaults: {},
  create() {
    return {
      interceptors: {
        response: {
          use: jest.fn()
        },
        request: {
          use: jest.fn()
        }
      },
      get: jest.fn(() => Promise.resolve({
        data: {}
      })),
      post: jest.fn(() => Promise.resolve({
        data: {}
      })),
      put: jest.fn(() => Promise.resolve({
        data: {}
      })),
      delete: jest.fn(() => Promise.resolve({
        data: {}
      })),
      patch: jest.fn(() => Promise.resolve({
        data: {}
      })),
    }
  }
};
