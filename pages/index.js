import Container from "../src/components/Container";
import Joblist from "../src/components/JobList";
import Layout from "../src/components/Layout";
import {useState, useEffect} from 'react';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/api/joblist")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, []);

  return (
    <Layout>
      <Container>
        <Joblist jobs={jobs}/>
      </Container>
    </Layout>
  )
}
