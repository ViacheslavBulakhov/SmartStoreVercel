import AsideFiltersItem from '../../Filters/AsideFiltersItem';
import CostBox from './CostBox/CostBox';

export const Aside = () => {
  return (
    <aside style={{ width: '25%' }}>
      <ul>
        <CostBox />
        {['Матеріал', 'Відтінок', 'Особливості'].map(item => (
          <AsideFiltersItem key={item} name={item} />
        ))}
      </ul>
    </aside>
  );
};
