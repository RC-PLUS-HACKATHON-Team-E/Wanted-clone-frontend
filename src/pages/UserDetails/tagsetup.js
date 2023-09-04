import React, { useState } from "react";
import { ReactComponent as Gradualchange } from '../../assets/gradualchange.svg';
import { ReactComponent as Wantedlogo } from '../../assets/wantedlogo.svg';
import styles from './Tagsetup.module.css';
import { useNavigate } from "react-router-dom";

function Tagsetup(props) {
    let navigate = useNavigate();
    const [selectedEmpathy, setSelectedEmpathy] = useState([]);
    const [selectedInterest, setSelectedInterest] = useState([]);
    const [selectedTrend, setSelectedTrend] = useState([]);

    const handleEmpathyChange = (e) => {
        setSelectedEmpathy((prevEmpathy) => [...prevEmpathy, e.target.value]);
    };

    const handleInterestChange = (e) => {
        setSelectedInterest((prevInterest) => [...prevInterest, e.target.value]);
    };

    const handleTrendChange = (e) => {
        setSelectedTrend((prevTrend) => [...prevTrend, e.target.value]);
    };

    const handletagSubmit = (e) => {
        e.preventDefault();
        // 회원가입 처리 로직 추가
        navigate('/');
    };

    return (
        <div className={styles['tag-background']}>
            <div className={styles['wanted-logo-wrapper']}>
                <Gradualchange width="50" height="20"></Gradualchange>
                <Wantedlogo width="87.5" height="20"></Wantedlogo>
            </div>
            <div className={styles['tag-wrapper']}>
                <div className={styles['tag-header']}>
                    <ul className={styles['step_container']}>
                        <li className={`${styles['header-text']} ${styles['active']}`}>
                            <em className={styles['header-text-active-em']}><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 5L5 9L13 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></em>
                            <em className={styles['header-text-active-em']}><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 5L5 9L13 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></em>
                            <em className={styles['header-text-active-em']}><span className={styles['text-num']}>3</span></em><span className={styles['header-text-active-span']}>관심태그설정</span>
                        </li>
                    </ul>
                </div>
                <div className={styles['tag-container']}>
                    <div className={styles['tag-header-message']}>
                        <p>OOO님의 커리어를 위한<br />콘텐츠를 추천해 드릴게요!</p>
                    </div>
                    <form onSubmit={handletagSubmit}>
                        <button
                            type="submit"
                            className={`${styles['tag-next-button']} ${styles['success']}`}
                            onClick={() => {}}
                        >
                            원티드 시작하기
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Tagsetup;
