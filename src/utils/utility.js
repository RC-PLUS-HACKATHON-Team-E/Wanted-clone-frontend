/**
 * 빈 값이 맞는지 검증하기
 * @param {any} value 값
 * @category Utility
 * @returns boolean
 */
export const isEmpty = function (value) {
  return (
    value === '' || value === null || value === undefined || (typeof value === 'object' && !Object.keys(value).length)
  )
}

/**
 * 이메일 검증
 * @param {string} email 이메일
 * @category Utility
 * @returns boolean
 */
export function isValidEmail(email) {
  return email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
}

/**
 * 전화번호 검증
 * @param {string} phoneNumber 전화번호
 * @category Utility
 * @returns boolean
 */
export function isValidPhoneNumber(phoneNumber) {
  return phoneNumber.match(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/)
}
