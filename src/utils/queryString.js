// 对象转查询字符串
const queryString = function (obj) {
  return Object.keys(obj).map(item => item + '=' + obj[item]).join('&')
}
export default queryString
