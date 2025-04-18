import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Project, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CircleGauge, Drill, LoaderCircle, MinusCircle, Timer } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({projects} : { projects : Project[]}) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full gap-4 rounded-xl p-4">
                
                <Card className='w-180 flex-1'>
                    <CardHeader className='border-b border-gray-200 pb-5'>
                        <div className="font-bold text-xl">Recently Added Projects ({projects.filter(project=>!project.completed).length})</div>
                    </CardHeader>
                    <CardContent className='p-0 m-0'>
                        <ul className="justify-between">
                            {projects.filter(project => !project.completed).map((project) => (
                               <Link key={project.id} href={`projects/` + project.id + `/view`} >
                                    <li className="border-b border-gray-300 p-3 hover:bg-gray-100">
                                        <div className='flex'><Timer color='#0099cc' className='mr-2' /> {project.name} | <span className='text-xs mt-1 ml-2'>Created {project.start_date}</span></div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                
                <Card className='w-180 flex-1'>
                    <CardHeader className='border-b border-gray-200 pb-5'>
                        <div className="font-bold text-xl">Completed Projects ({projects.filter(project=>project.completed).length})</div>
                    </CardHeader>
                    <CardContent className='p-0 m-0'>
                        <ul className="justify-between">
                            {projects.filter(project => project.completed).map((project) => (
                               <Link key={project.id} href={`projects/` + project.id + `/view`} >
                                    <li className="border-b border-gray-300 p-3 hover:bg-gray-100">
                                        <div className='flex'><Timer color='#0099cc' className='mr-2' /> {project.name} | <span className='text-xs mt-1 ml-2'>Created {project.start_date}</span></div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

            </div>
        </AppLayout>
    );
}
