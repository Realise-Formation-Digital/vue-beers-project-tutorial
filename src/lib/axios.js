const axios = require('axios').default;

class Axios {

  /**
   * Get infos from an api
   * @param {String} path - path where find beers
   * @return {Promise<*>}
   */
  static async get (path) {
    try {
      let result = null
      result = await axios.get(path)
      if (result.status !== 200) throw new Error("Somethings goes wrong")
      return result.data
    }catch (e) {
      console.error('[Axios][get] an error occurred when axios is getting infos', e)
    }
  }
}

export default Axios
