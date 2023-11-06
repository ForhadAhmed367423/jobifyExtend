import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobTab from "../../Tabs/JobTab";

const Home = () => {
    const jobs = useLoaderData();
    
    console.log(jobs)
    return (
        <div>
            <Banner></Banner>
            <div className=' text-center w-full min-h-screen'>
            <Tabs >
    <TabList>
      <Tab>All</Tab>
      <Tab>Remote</Tab>
      <Tab>Hybrid</Tab>
      <Tab>On-Site</Tab>
      <Tab>Full Time</Tab>
    </TabList>

    <TabPanel>
    <JobTab jobs={jobs}></JobTab>
    </TabPanel>
    <TabPanel>
      <h2>Any content Remote</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content Hybrid</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content Onsite</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content Fulltime</h2>
    </TabPanel>
  </Tabs>
        </div>
        </div>
    );
};

export default Home;