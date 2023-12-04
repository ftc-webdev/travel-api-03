import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// options: array of { value, component }
const MyTabs = ({ options }) => {
  return (
    <Tabs>
      <TabList>
        { options.map(option => <Tab>{option.label}</Tab> ) } 
      </TabList>

      { options.map(option => <TabPanel>{option.component}</TabPanel> )}

    </Tabs>
  )
}

export default MyTabs