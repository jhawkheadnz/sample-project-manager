import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Project',
        href: '/projects/'
    },
    {
        title: 'Tasks',
        href: '/tasks/create',
    },{
        title: 'Create a Task',
        href: '/tasks/create'
    }
];

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    user_id: string;
    completed: number;
}

type CreateTaskForm = {
    name: string,
    description: string,
    project: number
}
export default function TaskMain({ project }:{ project : Project }) {

    //console.log(project);

    const { data, setData, post } = useForm<Required<CreateTaskForm>>({
        name: '',
        description: '',
        project: project.id
    });

    const handleSubmit: FormEventHandler = (e) => {

        e.preventDefault();

        //console.log(data);

        post(route("tasks.store"), {
            onFinish: () => { console.log(e); }
        });

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="max-w-[600px] flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

                    Task:
                    <Input
                        id="project_name"
                        type='text'
                        required
                        tabIndex={1}
                        value={data.name}
                        onChange={(e)=> setData('name', e.target.value)}
                        placeholder="Task Name..." />    

                    Description:
                    <Textarea
                        className="h-[160px]"
                        id="project_description"
                        required
                        tabIndex={2}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Describe this task..."
                        />

                    <Input
                        id="project_id"
                        type='hidden'
                        required
                        tabIndex={1}
                        value={data.project}
                        onChange={(e)=> setData('project', Number.parseInt(e.target.value))}
                        placeholder="Task Name..." />    

                    <Button type="submit">Add Task</Button>
                </form>
            </div>
        </AppLayout>
    );
}
