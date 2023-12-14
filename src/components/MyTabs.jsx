import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// tabs: array of { label, component }
const MyTabs = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        { tabs.map(tab => <Tab>{tab.label}</Tab> ) } 
      </TabList>

      { tabs.map(tab => <TabPanel>{tab.component}</TabPanel> )}

    </Tabs>
  )
}

export default MyTabs