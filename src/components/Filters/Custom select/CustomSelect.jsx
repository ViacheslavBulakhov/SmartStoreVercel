import { useStore } from "../../../zustand/store";
import { CustomSelectEl } from "./CustomSelectStyled";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const CustomSelect = () => {
  const region = useStore((state) => state.filters.region);
  const setRegionFilter = useStore((state) => state.setRegionFilter);

  return (
    <CustomSelectEl
      options={options}
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
      value={region}
      onChange={setRegionFilter}
    />
  );
};

export default CustomSelect;
