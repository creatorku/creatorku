import axios from 'axios';

export const instagramApi = {
  getIgAccounts: () => {
    return new Promise((resolve, reject) => {
      axios.get('https://graph.facebook.com/me/accounts', {
        params: {
          fields: 'instagram_business_account{id,name,username,profile_picture_url}',
          access_token: window.localStorage.getItem('fbAuthToken')
        }
      }).then((res) => {
        console.log(res, 'res getIgAcc');
        if (res.status === 200) resolve(res.data.data[0].instagram_business_account);
        else resolve(null);
      }).catch((e) => {
        reject(e);
      })
    })
  },
  getUserData: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`https://graph.facebook.com/${id}`, {
        params: {
          fields: 'biography,id,followers_count,follows_count,media_count,name,username,website,profile_picture_url',
          access_token: window.localStorage.getItem('fbAuthToken')
        }
      }).then((res) => {
        console.log(res, 'res getUserData');
        if (res.status === 200) {
          localStorage.setItem('igAccount', JSON.stringify(res.data));
          resolve(res.data);
        }
      }).catch((e) => {
        reject(e);
      })
    })
  }
}