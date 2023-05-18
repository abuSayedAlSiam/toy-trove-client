import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    <div className='bg-red-400'>
        <h2>Shop by category</h2>
        <Tabs>
        <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
            <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 2</h2>
        </TabPanel>
    </Tabs>
    </div>
};

export default ShopByCategory;