import {createGlobalStyle} from 'styled-components'
import '../styles/fonts/pretendard-subset.css';
export const supportDeviceSize = 768

export const GlobalStyle = createGlobalStyle`
html {
font-size: 62.5%; // 1rem = 10px 로 변경 한 것, 바꾼 이유는 사파리에서 폰트가 너무 작은것은 허용하지 않기 때문.
// 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
// 128px => 12.8rem , 4px => 0.4rem 가능!

    @media all and (max-width: ${supportDeviceSize}px) {
        font-size: 31.25%;
    }
}

body {
    background: white;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, sans-serif, Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
