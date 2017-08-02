import Ajax from 'axios';

let HOST = process.env.API_ENDPOINT;

let repository = (method, path) => {
  return (replacements) => {
    let newPath = path;
    if (typeof replacements != 'undefined') {
      Object.keys(replacements).forEach((item) => {
        newPath = newPath.replace(`:${item}`, replacements[item]);
      });
    }
    return (currentUser) => {
      let jwt = null;
      if (currentUser != null) {
        jwt = currentUser.jwt;
      }
      return (params) => {
        let options = {
          method: method,
          baseURL: HOST,
          url: newPath,
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        if (method == 'get') {
          Object.assign(options, {params: params});
        } else {
          Object.assign(options, {data: params});
        }
        return Ajax(options);
      };
    };
  };
};

export default {
  Login: repository('post', '/api/login.json')
};
