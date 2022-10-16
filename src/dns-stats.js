const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  domains.forEach((domain) => {
    domain.split('.').reverse().map(name => name = '.' + name).reduce((prev, curr) => {
      curr = prev + curr
      obj[curr] ? obj[curr]++ : obj[curr] = 1
      return curr
    }, '')
  })

  return obj
}

module.exports = {
  getDNSStats
};
