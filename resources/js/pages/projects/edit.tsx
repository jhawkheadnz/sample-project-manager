import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FormEventHandler } from 'react';
import { Checkbox } from '@/components/ui/checkbox';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    user_id: string;
    completed: number;
}

type CreateProjectForm = {
    id: number,
    name: string,
    description: string,
    start_date: string,
    user_id: string,
    completed: number
}

export default function ProjectView({ project }: { project: Project }) {

    const { data, setData, post } = useForm<Required<CreateProjectForm>>({
        id: project.id,
        name: project.name,
        description: project.description,
        start_date: project.start_date,
        user_id: project.user_id,
        completed: project.completed,
    });

    const handleSubmit: FormEventHandler = (e) => {

        e.preventDefault();

        console.log(data);

        post(route("projects.update"), {
            onFinish: () => { console.log(e); }
        });

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects"></Head>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <h1 className="text-3xl font-bold">{project.name}</h1>
                    <p className="text-xs text-gray-500">
                        <strong>Created By: {project.user_id}</strong> on {project.start_date}
                    </p>
                <hr />

                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

                    Project Name:
                    <Input
                        id="project_name"
                        type='text'
                        required
                        tabIndex={1}
                        value={data.name}
                        onChange={(e)=> setData('name', e.target.value)}
                        placeholder="Project Name..." />

                    Project Description:
                    <Textarea
                        className="h-[160px]"
                        id="project_description"
                        required
                        tabIndex={2}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Describe this project..."
                    />

                    Project Start Date: <Input
                    id="start_date"
                    type="text"
                    required
                    tabIndex={3}
                    value={data.start_date}
                    onChange={(e) => setData('start_date', e.target.value)}

                />

                    Completed: <Checkbox
                        id="completed"
                        tabIndex={4}
                        value={data.completed}
                        />

                    <Button type="submit">Create Project</Button>
                </form>

            </div>
        </AppLayout>
    );
}
