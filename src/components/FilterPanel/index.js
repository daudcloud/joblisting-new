import React from 'react'
import { FilterItem, StyledFilterPanel } from './style'
import Image from 'next/image'

export default function FilterPanel({filters, clear, removeFilter}) {
    return (
        <StyledFilterPanel>
            <div className="filters">
                {filters.map(filter => (
                    <div className="filter-wrapper" key={filter}>
                        <FilterItem>
                            {filter}
                        </FilterItem>
                        <div className="remove" onClick={() => removeFilter(filter)}>
                            <Image src="/images/icon-remove.svg" alt="remove" width={"15"} height={"15"}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="clear" onClick={clear}>Clear</div>
        </StyledFilterPanel>
    )
}
