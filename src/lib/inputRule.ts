import { SIValue } from './siPrefix';

export const Rules = {
  required: (value: string) => !!value || '値を入力してください',
  value: (value: string) => Number.isFinite(SIValue.parse(value).fraction) || '不正な値です',
  notZero: (value: string) => Number(value) !== 0 || '値を 0 にはできません',
  notNegative: (value: string) => {
    const siValue = SIValue.parse(value);
    return (Number.isFinite(siValue.fraction) && siValue.fraction >= 0) || '負値にはできません';
  },
};
