import { IDCardStrictRegExp } from '../regular';
import toString from '../toString';

/**
 * @name 验证身份证
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateIDCard = (data: string): boolean => {
  return IDCardStrictRegExp.test(toString(data));
};

export default validateIDCard;
