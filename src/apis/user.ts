import request from '@/utils/http'

// 定义参数类型
interface LoginParams {
  account: string
  password: string
}

// 定义响应数据类型（可根据实际接口返回结构补充）
interface LoginResponse {
  token: string
  userInfo: {
    id: string
    name: string
    // 根据接口结构添加更多字段
  }
}

// loginAPI 函数：传入 LoginParams，返回 Promise<LoginResponse>
export const loginAPI = (params: LoginParams): Promise<LoginResponse> => {
  return request({
    url: '/login',
    method: 'POST',
    data: params
  })
}
