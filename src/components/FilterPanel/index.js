import React from 'react'
import { FilterItem, StyledFilterPanel } from './style'

export default function FilterPanel({filters, clear, removeFilter}) {
    return (
        <StyledFilterPanel>
            <div className="filters">
                {filters.map(filter => (
                    <div className="filter-wrapper">
                        <FilterItem>
                            {filter}
                        </FilterItem>
                        <div className="remove" onClick={() => removeFilter(filter)}>
                            <img src="/images/icon-remove.svg" alt="remove" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="clear" onClick={clear}>Clear</div>
        </StyledFilterPanel>
    )
}
