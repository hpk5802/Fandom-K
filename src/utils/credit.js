const stringToNumber = value => {
  return value ? parseInt(value) : 0;
};

const formatimgCredit = value => {
  const foramtedValue = value.replace(/\D/g, ''); // 숫자를 제외한 입력 삭제
  const formated = foramtedValue.replace(/^0+/, ''); // 0으로 시작하는 경우 제거

  return formated;
};

export {stringToNumber, formatimgCredit};
