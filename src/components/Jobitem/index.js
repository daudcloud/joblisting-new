import Filter from "../Filter";
import { Company, Filters, Info, Pill, StyledItem, Title } from "./style";
import Image from 'next/image'

export default function Jobitem({job, addFilter}) {
    const filters = [job.role, job.level, ...job.languages, ...job.tools]
    return (
        <>
          <StyledItem className={job.featured ? "featured" : ""}>
              <div className="img">
                <Image className="img" src={job.logo} layout="fill" alt="logo" />
              </div>
              <Info>
                <div className="info-header">
                <Company>
                    {job.company}
                </Company>
                {job.new && (
                    <Pill new>
                        New!
                    </Pill>
                )}
                {job.featured && (
                    <Pill>
                        Featured
                    </Pill>
                )}
                </div>
                <Title>
                    {job.position}
                </Title>
                <div className="info-footer">
                    <span>{job.postedAt}</span>
                    &bull;
                    <span>{job.contract}</span>
                    &bull;
                    <span>{job.location}</span>
                </div>
              </Info>
              <span className="hr"></span>
              <Filters>
                  {filters.map(filter => (
                      <Filter key={filter} filter={filter} addFilter={addFilter}/>
                  ))}
              </Filters>
          </StyledItem>
        </>
    )
}
