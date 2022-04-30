import TopTitle from '../../elements/TopTitle';
import Container from '../../elements/Container';
import AdminDashboardTabs from '../../components/Admin/AdminDashboardTabs';


export default function AdminDashboard() {
    

    return (
        <section className='py-8'>
            <Container>
                <div className='flex items-center justify-between mb-14'>
                    <TopTitle title="Admin Dashboard" users="7" />
                </div>
                <AdminDashboardTabs />
            </Container>
        </section>
    )
}
