import AppLayout from '@/layouts/app-layout';
import { Project, User, type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FormEventHandler } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cp } from 'fs';

type CreateProjectForm = {
    id: number;
    name: string;
    description: string;
    start_date: string;
    user_id: number;
    completed: boolean;
}

export default function ProjectView({ project, user }: { project: Project, user: User }) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Projects',
            href: '/projects',
        },{
            title: 'Edit: ' + project.name,
            href: '/projects/' + project.id + '/edit',
        }
    ];

    const { data, setData, post } = useForm<Required<CreateProjectForm>>({
        id: project.id,
        name: project.name,
        description: project.description,
        start_date: project.start_date,
        user_id: project.user_id,
        completed: project.completed
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
                    <h1 className="text-3xl font-bold"><span className=''>Edit:</span> {project.name}</h1>
                    <p className="text-xs text-gray-500">
                        <strong>Created By: {user.name}</strong> on {project.start_date}
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
                        value={String(data.completed)}
                        />

                    <Button type="submit">Create Project</Button>
                </form>

            </div>
        </AppLayout>
    );
}
