export const stringNormalize = str => str.replace(/\s/g, '').toLowerCase();
export const formatter = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
});
export const applyDiscount = (amount, discountPercent) => {
  if (parseInt(discountPercent) < 0 || parseInt(discountPercent) > 100) {
    return 'Некоректні дані';
  }

  // Обчислення суми знижки
  let discountAmount = parseInt(amount) * (parseInt(discountPercent) / 100);

  // Обчислення вартості зі знижкою
  let discountedPrice = parseInt(amount) - discountAmount;

  // Округлення до цілого числа
  discountedPrice = Math.round(discountedPrice);

  return discountedPrice;
};
