const API = process.env.REACT_APP_API

export const EndPoint = {
  GET_DOMAIN_V1_AUTO_LOGIN: `${API}/domain/jwt/check/:isManual`,
  POST_DOMAIN_V1_LOGIN: `${API}/domain/login`,
  POST_DOMAIN_V1_REGISTER: `${API}/domain/register`,

  GET_DOMAIN_V1_DISTINCT_NERDS: `${API}/domain/v1/neordinary/distinct/nerds`,
  GET_DOMAIN_V1_DISTINCT_KEEPERS: `${API}/domain/v1/neordinary/distinct/keepers`,
  POST_DOMAIN_V1_UPDATE_NERD: `${API}/domain/v1/neordinary/nerds/:nerdId`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_DOMAIN_V1_AUTO_LOGIN]: {},

    [EndPoint.GET_DOMAIN_V1_DISTINCT_NERDS]: {},
    [EndPoint.GET_DOMAIN_V1_DISTINCT_KEEPERS]: {},
  },
  post: {
    [EndPoint.POST_DOMAIN_V1_LOGIN]: {},
    [EndPoint.POST_DOMAIN_V1_REGISTER]: {},

    [EndPoint.POST_DOMAIN_V1_UPDATE_NERD]: {},
  },
  patch: {},
  put: {},
  // delete: {},
}

export default ApiMapper
