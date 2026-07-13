/**
 * 对参数进行处理，小于0则返回0
 */
const nonNegativeData = (data: number) => {
  return Math.max(data, 0);
};

export default nonNegativeData;
