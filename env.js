class CloudEnv {
  constructor() {
    this._CLOUD_ENVS = {
      'dev': 'dev-1gpp53ju3ceb46c7'
    }
  }

  getCurrectEnv() {
    return process.env.NODE_ENV || 'dev'
  }

  isDevelopment() {
    return this.getCurrectEnv() === 'dev'
  }

  isPPE() {
    return this.getCurrectEnv() === 'ppe'
  }

  isProduction() {
    return this.getCurrectEnv() === 'prod'
  }

  getEnvId() {
    return this._CLOUD_ENVS[this.getCurrectEnv()]
  }
}

const _cloudEnv = new CloudEnv()

module.exports = exports = _cloudEnv