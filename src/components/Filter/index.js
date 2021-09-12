import { FilterItem } from "./style";

export default function Filter({filter, addFilter}) {
    return (
        <FilterItem onClick={() => addFilter(filter)}>
            {filter}
        </FilterItem>
    )
}
