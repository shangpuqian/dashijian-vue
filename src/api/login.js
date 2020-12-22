// 引入 axios
import axios from '@/utils/request'

// 用户登录接口
export function _login (formData) {
  return axios({
    method: 'post',
    url: '/api/login',
    data: formData
  })
}
