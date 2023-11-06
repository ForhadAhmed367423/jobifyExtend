import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobTab = () => {
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Remote</Tab>
      <Tab>Hybrid</Tab>
      <Tab>On-Site</Tab>
      <Tab>Full Time</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default JobTab;