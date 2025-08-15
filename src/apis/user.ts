import request from '@/utils/http'

// 定义参数类型
interface LoginParams {
  account: string
  password: string
}
interface UserInfo {
  id: string
  account: string
  mobile: string
  avatar: string
  birthday: string
  cityCode: string
  gender: string
  nickname: string
  profession: string
  provinceCode: string
  token: string
}


// 定义响应数据类型（可根据实际接口返回结构补充）
interface LoginResponse {
  result: UserInfo | { id: string; account: string; mobile: string; avatar: string; birthday: string; cityCode: string; gender: string; nickname: string; profession: string; provinceCode: string; token: string } | null
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
