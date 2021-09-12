import FilterPanel from "../FilterPanel";
import Jobitem from "../Jobitem";
import { StyledList } from "./style";


export default function Joblist({jobs, filters, addFilter, removeFilter, clear}) {
    return (
        <>
            <StyledList>
                {filters.length > 0 && <FilterPanel filters={filters} clear={clear} removeFilter={removeFilter}/>}
                
                {jobs.map(job => (
                    <Jobitem key={job.id} job={job} addFilter={addFilter}/>
                ))}
            </StyledList>
        </>
    )
}
