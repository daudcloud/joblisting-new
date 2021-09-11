import Jobitem from "../Jobitem";
import { StyledList } from "./style";


export default function Joblist({jobs}) {
    return (
        <>
            <StyledList>
                {jobs.map(job => (
                    <Jobitem key={job.id} job={job}/>
                ))}
            </StyledList>
        </>
    )
}
