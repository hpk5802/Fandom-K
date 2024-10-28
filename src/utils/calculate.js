const calculateExpire = date => {
  const today = new Date();
  const created = new Date(date);
  const timeToDay = 1000 * 3600 * 24;

  return Math.ceil((today.getTime() - created.getTime()) / timeToDay);
};

const calculatePercentage = (current, target) => {
  return (current / target) * 100;
};

export {calculateExpire, calculatePercentage};
