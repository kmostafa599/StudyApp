import TableBody from './TableBody'
import TableHead from './TableHead'

export default function BonusTable({ users}) {

    

    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">

                    <table className="min-w-full divide-y divide-gray-200">
                        <TableHead />
                        <TableBody users={users} />
                    </table>

                    
                </div>
            </div>
        </div>
    )
}
