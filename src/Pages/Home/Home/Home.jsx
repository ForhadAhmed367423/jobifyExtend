import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobTab from "../../Tabs/JobTab";
import JobCard from "../JobCard/JobCard";
import { useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import About from "../About/About";

const Home = () => {
  useEffect(() => {
    document.title= "Jobify | Home";
  }, []);
    const jobs = useLoaderData();
    const tab1 =jobs.filter(job=> job.type==="remote")
    const tab2 =jobs.filter(job=> job.type==="hybrid")
    const tab3 =jobs.filter(job=> job.type==="onSite")
    const tab4 =jobs.filter(job=> job.type==="fullTime")
    const tab5 =jobs.filter(job=> job.type==="partTime")
    
    return (
        <div>
            <Banner></Banner>
            <div>
            <h1 className="text-4xl font font-bold text-center my-7">Featured Jobs</h1>
            <div className=' text-center w-full min-h-screen container mx-auto mb-7 border p-3 rounded-xl'>

<Tabs >
<TabList>
<Tab>All</Tab>
<Tab>Remote</Tab>
<Tab>Hybrid</Tab>
<Tab>On-Site</Tab>
<Tab>Full Time</Tab>
<Tab>Part Time</Tab>
</TabList>

<TabPanel>
<JobTab jobs={jobs}></JobTab>
</TabPanel>
<TabPanel>
<div className="grid grid-cols-3 gap-14 container mx-auto">
{
tab1.map(job=> <JobCard
key={job._id}
job={job}
>

</JobCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className="grid grid-cols-3 gap-14 container mx-auto">
{
tab2.map(job=> <JobCard
key={job._id}
job={job}
>

</JobCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className="grid grid-cols-3 gap-14 container mx-auto">
{
tab3.map(job=> <JobCard
key={job._id}
job={job}
>

</JobCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className="grid grid-cols-3 gap-14 container mx-auto">
{
tab4.map(job=> <JobCard
key={job._id}
job={job}
>

</JobCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className="grid grid-cols-3 gap-14 container mx-auto">
{
tab5.map(job=> <JobCard
key={job._id}
job={job}
>

</JobCard>)
}
</div>
</TabPanel>
</Tabs>
</div>
            </div>
        <About></About>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;