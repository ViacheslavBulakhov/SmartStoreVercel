import React from 'react';
import { useForm } from 'react-hook-form';

const GoodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Тут ви можете відправити дані до сервера або виконати інші дії з ними
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Категорія:</label>
        <input type="text" {...register('categories', { required: true })} />
        {errors.categories && <span>{errors.categories.message}</span>}
      </div>

      <div>
        <label>Бренд:</label>
        <input type="text" {...register('brand', { required: true })} />
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>

      <div>
        <label>Назва\Заголовок:</label>
        <input type="text" {...register('title', { required: true })} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>

      <div>
        <label>Модель:</label>
        <input type="text" {...register('model')} />
      </div>

      <div>
        <label>Виробник:</label>
        <input type="text" {...register('maker')} />
      </div>

      <div>
        <label>Вартість:</label>
        <input type="text" {...register('amount', { required: true })} />
        {errors.amount && <span>{errors.amount.message}</span>}
      </div>

      <div>
        <label>Знижка:</label>
        <input type="number" {...register('discount')} />
      </div>

      <div>
        <label>Кількість:</label>
        <input type="number" {...register('count')} />
      </div>

      <div>
        <label>Фото:</label>
        <input type="text" {...register('imgUrl', { required: true })} />
        {errors.imgUrl && <span>{errors.imgUrl.message}</span>}
      </div>

      <div>
        <label>Опис:</label>
        <textarea
          style={{ width: '100%', minHeight: '120px' }}
          type="text"
          value={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro dignissimos, perferendis blanditiis aperiam rerum ratione nihil, officia quam eaque at excepturi nam quibusdam odio tempore recusandae dolorem laboriosam qui.'
          }
          {...register('imgId')}
        />
      </div>

      <div>
        <label>Дані для фільтрів:</label>
        <input type="text" {...register('filters')} />
      </div>

      <button type="submit">Додати</button>
    </form>
  );
};

export default GoodForm;
