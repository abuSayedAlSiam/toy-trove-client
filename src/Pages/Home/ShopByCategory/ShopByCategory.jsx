import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StarWars from './StarWars';
import Avengers from './Avengers';
import Transformers from './Transformers';

const ShopByCategory = () => {

    return (
        <div className='md:w-10/12 h-96 mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Avengers</Tab>
                    <Tab>Transformers</Tab>
                    <Tab>Star Wars</Tab>
                </TabList>

                <TabPanel>
                    <Avengers></Avengers>
                </TabPanel>
                <TabPanel>
                    <Transformers></Transformers>
                </TabPanel>
                <TabPanel>
                    <StarWars></StarWars>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;