const formatWithCommas = value => {
  const getValueType = typeof value;
  if (getValueType === 'number' || getValueType === 'string') {
    let formatValue = value;
    if (getValueType === 'string') {
      formatValue = Number(value.replaceAll(',', ''));
    }
    return formatValue.toLocaleString('ko-KR');
  }
  return value;
};

export default formatWithCommas;
