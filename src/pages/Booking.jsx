import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OldBooking = () => {
  return (
    <>
      <h3>Booking 1</h3>
      <div>This is an old booking</div>
    </>
  )
}


const Booking = () => {
  return (
    <>
      <h2>Booking</h2>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <div>{"This is inner content - children"}</div>
        </TabPanel>

        <TabPanel>
          <OldBooking />
        </TabPanel>

        <TabPanel>
          This is an empty panel
        </TabPanel>

      </Tabs>


    </>
  )
}

export default Booking