import React, { useEffect, useState } from "react";
import { ReactComponent as Gradualchange } from '../../assets/gradualchange.svg';
import { ReactComponent as Wantedlogo } from '../../assets/wantedlogo.svg';
import styles from './Workplacesetup.module.css';

function Workplacesetup(props) {
    const [isFormValid, setIsFormValid] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState('');
    const [selectedWorkplace, setSelectedWorkplace] = useState('');

    const handleSchoolChange = (e) => {
        setSelectedSchool(e.target.value);
    };

    const handleWorkplaceChange = (e) => {
        setSelectedWorkplace(e.target.value);
    };

    const handleworkplaceSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            props.navigate('/tagsetup');
        }
    };

    useEffect(() => {
        // Check if both school and workplace are selected
        const Valid =
            selectedSchool &&
            selectedWorkplace;
        setIsFormValid(Valid);
    }, [selectedSchool, selectedWorkplace]);

    return (
        <div className={styles['workplace-background']}>
            <div className={styles['wanted-logo-wrapper']}>
                <Gradualchange width="50" height="20"></Gradualchange>
                <Wantedlogo width="87.5" height="20"></Wantedlogo>
            </div>
            <div className={styles['workplace-wrapper']}>
                <div className={styles['workplace-header']}>
                    <ul className={styles['step_container']}>
                        <li className={`${styles['header-text']} ${styles['active']}`}>
                            <em className={styles['header-text-active-em']}><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 5L5 9L13 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></em>
                            <em className={styles['header-text-active-em']}><span className={styles['text-num']}>2</span></em><span className={styles['header-text-active-span']}>학교/직장 설정</span>
                        </li>
                        <li className={styles['header-text']}>
                            <em className={styles['header-text-em']}><span>3</span></em>
                        </li>
                    </ul>
                </div>
                <div className={styles['workplace-container']}>
                    <div className={styles['workplace-header-message']}>
                        <p>아래 정보를 추가해 주세요!<br />더욱 정교한 추천을 받으실 수 있어요.</p>
                    </div>
                    <form onSubmit={handleworkplaceSubmit}>
                        <div className={styles['school-label']}>
                            <label htmlFor="school">학교</label>
                        </div>
                        <input
                            type="text"
                            value={selectedSchool}
                            placeholder="검색해 주세요."
                            name="school"
                            className={styles['school-input-block']}
                            onChange={handleSchoolChange}
                        ></input>
                        <div className={styles['workplace-label']}>
                            <label htmlFor="workplace">직장</label>
                        </div>
                        <input
                            type="text"
                            value={selectedWorkplace}
                            placeholder="검색해 주세요."
                            name="workplace"
                            className={styles['workplace-input-block']}
                            onChange={handleWorkplaceChange}
                        ></input>
                        <div className={styles['workplace-select-message']}>
                            신입의 경우, ‘신입’ 또는 ‘없음’을 직접 입력해 주세요.
                        </div>
                        <button
                            type="submit"
                            className={`${styles['workplace-next-button']} ${isFormValid ? styles['success'] : ''}`}
                            onClick={() => {}}
                        >
                            다음
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Workplacesetup;
