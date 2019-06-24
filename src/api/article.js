/**
 * article模块接口列表
 */
import base from './base' // 导入接口域名列表
import Http from '@/utils/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const article = {
  // 新闻列表
  articleList () {
    return Http.get(`${base.sq}/topics`)
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return Http.get(`${base.sq}/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return Http.post(`${base.sq}/accesstoken`, qs.stringify(params))
  }
  // 其他接口…………
}

export default article
