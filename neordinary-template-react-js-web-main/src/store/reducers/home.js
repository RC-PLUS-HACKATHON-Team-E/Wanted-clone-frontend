//초기 상태값 설정
const initialState = {}

//리듀서 설정
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      }
    }
  }
}

export default HomeReducer
