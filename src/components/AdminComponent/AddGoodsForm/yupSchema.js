import * as yup from 'yup';

export const schema = yup
  .object({
    categories: yup.string().required(),
    type: yup.string().required(),
    brand: yup.string().required(),
    title: yup.string().required(),
    model: yup.string(),
    maker: yup.string(),
    description: yup.string(),
    amount: yup.number().positive().integer().required(),
    discount: yup
      .number()
      .transform(value => (isNaN(value) ? undefined : value))
      .nullable(),
    count: yup.number().positive().integer().required(),
  })
  .required();
