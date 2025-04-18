import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { BadgeInfo, Settings } from 'lucide-react';
import React from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show Project Info and Tasks',
        href: '/projects',
    },
];

interface Task {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    progress: number;
    project_id: number;
}

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    user_id: string;
    completed: number;
}

interface User {
    id: number;
    email: string;
    name: string;
}

export default function ProjectView({ project, tasks, creator }: { project: Project, tasks: Task[], creator: User }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects"></Head>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="pyt-3 font-normal text-4xl">
                        <span className='font-semibold uppercase text-xs'>Project:</span><br/>
                        <div className='flex'>
                            <span>{project.name}</span>
                            <span><Link href={"edit"}>
                                <Settings />
                            </Link></span>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 rounded-sm">
                       <div className='flex mb-3'>
                            {project.description}
                            <BadgeInfo className='mr-3 ml-3' style={{ color: "#36a832" }} /> 
                       </div>
                        <p className="text-xs text-gray-500">
                            <strong>Created By: {creator.name}</strong> on {project.start_date}
                        </p>
                    </div>

                    <hr />

                    <div className='font-semibold text-2xl flex item-center align-middle'>
                        <div className='mr-4 mt-1'>Project Tasks</div>
                        <Link href={`/tasks/` + project.id + `/create`}><button className='bg-blue-500 py-2 px-5 cursor-pointer text-sm text-white rounded'>Add a Task</button></Link>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Task</TableHead>
                                <TableHead className="font-bold">Description</TableHead>
                                <TableHead className="text-right font-bold">% Completed</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                tasks.map((task) => (
                                <TableRow key={task.id} className='cursor-default'>
                                    <TableCell className="font-medium">{task.name}</TableCell>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell className="text-right">
                                        <Progress value={task.progress} />{task.progress}%
                                    </TableCell>
                                </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

            </div>
        </AppLayout>
    );
}