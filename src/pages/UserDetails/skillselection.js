import React, { useEffect, useState } from "react";
import { ReactComponent as Gradualchange } from '../../assets/gradualchange.svg';
import { ReactComponent as Wantedlogo } from '../../assets/wantedlogo.svg';
import styles from './SkillSelection.module.css';

function SkillSelection(props) {
    const [isFormValid, setIsFormValid] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');

    const jobOptions = [
        { value: 'developer', label: '개발자' },
        { value: 'designer', label: '디자이너' },
        { value: 'manager', label: '매니저' },
        // 더 많은 직군 옵션 추가

    ];

    const experienceOptions = [
        { value: '0-1', label: '신입' },
        { value: '1-3', label: '1-3년' },
        { value: '3-5', label: '3-5년' },
        { value: '5-plus', label: '5년 이상' },
        // 더 많은 경력 옵션 추가

    ];

    const handleJobChange = (e) => {
        setSelectedJob(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setSelectedExperience(e.target.value);
    };

    const handleskillSubmit = (e) => {
        e.preventDefault();
        //회원가입 처리 로직 추가
        if (isFormValid) {
            props.navigate('/workplacesetup');
        }
    };

    useEffect(() => {
        /**빈문자열은 boolean값으로 fasle다 */
        const Valid =
            selectedJob &&
            selectedExperience;
        setIsFormValid(Valid);
    }, [selectedJob, selectedExperience]);

    return (
        <div className={styles['skill-background']}>
            <div className={styles['wanted-logo-wrapper']}>
                <Gradualchange width="50" height="20"></Gradualchange>
                <Wantedlogo width="87.5" height="20"></Wantedlogo>
            </div>
            <div className={styles['skill-wrapper']}>
                <div className={styles['skill-header']}>
                    <ul className={styles['step_container']}>
                        <li className={`${styles['header-text']} ${styles['active']}`}>
                            <em className={styles['header-text-active-em']}><span className={styles['text-num']}>1</span></em><span className={styles['header-text-active-span']}>전문분야 설정</span>
                        </li>
                        <li className={styles['header-text']}>
                            <em className={styles['header-text-em']}><span>2</span></em>
                            <em className={styles['header-text-em']}><span>3</span></em>
                        </li>
                    </ul>
                </div>
                <div className={styles['skill-container']}>
                    <div className={styles['skill-header-message']}>
                        <p>어떤 일을 하고 계신가요?<br />딱 맞는 회사와 콘텐츠를 추천해 드려요!</p>
                    </div>
                    <form onSubmit={handleskillSubmit}>
                        <div className={styles['job-label']}>
                            <label htmlFor="job">직군</label>
                        </div>
                        <div className={styles['job-select-box']}>
                            <select className={styles['job']} value={selectedJob} onChange={handleJobChange}>
                                <option value="">직군을 선택하세요</option>
                                {jobOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles['job-select-message']}>
                            신입의 경우, 희망 직군을 선택해 주세요.
                        </div>
                        <div className={styles['experience-label']}>
                            <label htmlFor="experience">경력</label>
                        </div>
                        <div className={styles['experience-select-box']}>
                            <select className={styles['experience']} value={selectedExperience} onChange={handleExperienceChange}>
                                <option value="">경력을 선택하세요</option>
                                {experienceOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className={`${styles['skill-next-button']} ${isFormValid ? styles['success'] : ''}`}
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

export default SkillSelection;
