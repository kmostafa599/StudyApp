// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { updateVote } from '../../../store/actions';
import BonusTable from './BonusTable';



export default function SwitchTabs() {
    // const users = useSelector(state=>state.users)
    // const dispatch = useDispatch()

    // const handleVote = (proposalId,vote,userVoted) => {
        
    //     // dispatch(updateVote(proposalId,vote,userVoted))
   
    // }
    return (
        <div>
            <Tabs className="mt-14">
            <TabList className="flex border-b-[1px] border-gray-300 overflow-auto">
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">All</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Teachers</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Students</Tab>
            </TabList>
            <TabPanel>
                <BonusTable  />
            </TabPanel>
            <TabPanel>
                <BonusTable  filterNew />
            </TabPanel>
            <TabPanel>
                <BonusTable  voting />
            </TabPanel>
            
        </Tabs>
        </div>
        
    )
}
