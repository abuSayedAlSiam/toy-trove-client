import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StarWars from './StarWars';
import Avengers from './Avengers';
import Transformers from './Transformers';

const ShopByCategory = () => {

    return (
        <div className='md:w-10/12 h-96 mb-40  mx-auto'>
            <Tabs>
                <TabList className='flex justify-center bg-gray-200 p-4 mb-3'>
                    <Tab
                        className='px-4 py-2 rounded-md mr-2'
                        selectedClassName='bg-sky text-sky-400 '
                    >
                        Avengers
                    </Tab>
                    <Tab
                        className='px-4 py-2 rounded-md mr-2'
                        selectedClassName='bg-sky text-sky-400 '
                    >
                        Transformers
                    </Tab>
                    <Tab
                        className='px-4 py-2 rounded-md mr-2'
                        selectedClassName='bg-sky text-sky-400 '
                    >
                        Star Wars
                    </Tab>
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