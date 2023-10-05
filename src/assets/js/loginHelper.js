export const facebookLogin = {
  login: () => {
    return new Promise((resolve) => {
      window.FB.getLoginStatus((res) => {
        if (res.status !== 'connected') {
          window.FB.login(function(response) {
            if (response.authResponse) {
              localStorage.setItem('fbAuthToken', response.authResponse.accessToken);
              localStorage.setItem('fbLoggedIn', true);
              window.FB.api('/me', {fields: 'name, email'}, function(_response) {
                localStorage.setItem('fbAccount', JSON.stringify(_response));
                resolve(_response);
              });
            } else { 
              // <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
              console.log('User cancelled login or did not fully authorize.'); 
            }
          }, {scope: 'public_profile,email'});
        }
      });
    })
  },
  logout: () => {
    return new Promise((resolve) => {
      window.FB.logout(function() {
        localStorage.setItem('fbAuthToken', '');
        localStorage.setItem('fbAccount', null);
        localStorage.setItem('fbLoggedIn', false);
        localStorage.setItem('igAccount', null);
        resolve('ok');
      });
    })
  },
  getLoginStatus: () => {
    window.FB.getLoginStatus((res) => {
      console.log(res, 'FB.getLoginStatus')
    });
  }
}