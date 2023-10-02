export const facebookLogin = {
  asyncInit: () => {
    window.fbAsyncInit = function() {
      // const instagramBtn = document.getElementById('ig-btn');
      (
        function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk')
      );
      // <!-- Initialize the SDK with your app and the Graph API version for your app -->
      window.FB.init({
        appId: '264235776552401',
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });

      // this.getLoginStatus()
      // <!-- If you are logged in, automatically get your name and email adress, your public profile information -->
      // if (instagramBtn) {
      //   instagramBtn.addEventListener('click', () => {
          // FB.login(function(response) {
          //   if (response.authResponse) {
          //     console.log(response, 'FB response');
          //     // FB.api('/me', {fields: 'name, email'}, function(response) {
          //     //   console.log(response, 'FB.api /me response')
          //     // });
          //   } else { 
          //     // <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
          //     console.log('User cancelled login or did not fully authorize.'); }
          // }, {scope: 'public_profile,email'});
      //   })
      // }
    };
  },
  login: () => {
    window.FB.getLoginStatus((res) => {
      console.log(res, 'FB.getLoginStatus');
      if (res.status !== 'connected') {
        window.FB.login(function(response) {
          if (response.authResponse) {
            localStorage.setItem('fbAuthToken', response.authResponse.accessToken)
            window.FB.api('/me', {fields: 'name, email'}, function(response) {
              localStorage.setItem('fbAccount', JSON.stringify(response))
            });
          } else { 
            // <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
            console.log('User cancelled login or did not fully authorize.'); }
        }, {scope: 'public_profile,email'});
      }
    });
  },
  logout: () => {
    window.FB.logout(function(response) {
      console.log(response, 'FB.logout')
    })
  },
  getLoginStatus: () => {
    window.FB.getLoginStatus((res) => {
      console.log(res, 'FB.getLoginStatus');
    });
  }
}