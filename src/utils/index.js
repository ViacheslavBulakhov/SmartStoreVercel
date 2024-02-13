export const stringNormalize = str => str.replace(/\s/g, '').toLowerCase();
export const formatter = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
});
