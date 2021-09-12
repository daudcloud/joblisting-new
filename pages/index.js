import Container from "../src/components/Container";
import Joblist from "../src/components/JobList";
import Layout from "../src/components/Layout";
import {useState, useEffect} from 'react';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const addFilter = (filter) => {
    if(filters.includes(filter)) {
      return null
    }
    setFilters([...filters, filter]);
  }

  const removeFilter = (filter) => {
    setFilters(filters.filter(filt => filt !== filter));
  }

  const clear = () => {
    if(filters.length === 0) return null;
    setFilters([]);
  }
  
  useEffect(() => {
    fetch("http://localhost:3000/api/joblist")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, []);

  useEffect(() => {
    const tempJobs = [];
    jobs.map(job => {
      job.filters = [job.role, job.level, ...job.languages, ...job.tools]
      for(let j = 0; j < filters.length; j++) {
        if(!job.filters.includes(filters[j])) {
          return null
        }
      }
      tempJobs.push(job)
    })
    setFilteredJobs(tempJobs)
  }, [filters, jobs])

  return (
    <Layout>
      <Container>
        <Joblist jobs={filteredJobs.length > 0 ? filteredJobs : jobs} filters={filters} addFilter={addFilter} removeFilter={removeFilter} clear={clear}/>
      </Container>
    </Layout>
  )
}
