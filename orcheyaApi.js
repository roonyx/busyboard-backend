const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const BASE_API_URL = process.env.ORCHEYA_BASE_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

class OrcheyaApi {
  constructor() {
    this.token = undefined;
  }

  async checkToken() {
    if (this.token === undefined || !this.verifyTokenTime(this.token)) {
      await this.getToken(`${BASE_API_URL}/api/app/generate_token`);
    }
  }

  verifyTokenTime(token) {
    let decodedToken = jwt.decode(token);
    return decodedToken.exp > (new Date().getTime() / 1000);
  }

  async getToken(url) {
    const params = {
      method: 'POST',
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    };
    try {
      const response = await fetch(url, params);
      const json = await response.json();
      this.token = await json.token;
    } catch (error) {
      throw new Error(error);
    };
  };

  async getWorklogs(params) {
    await this.checkToken();
    const defParams = {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    };
    Object.assign(defParams, params);
    try {
      const response = await fetch(`${BASE_API_URL}/api/worklogs`, defParams);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    };
  };
}
module.exports = new OrcheyaApi();
