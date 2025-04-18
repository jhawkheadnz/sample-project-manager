import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@headlessui/react";

interface TaskInfo {
    id: number;
    name: string;
    description: string;
    progress: number;
    completed: boolean;
}

export default function EditTaskDialog(task: TaskInfo){

    return (
        <Dialog>
            <DialogTrigger asChild>
                    <Button>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogDescription>
                        Make changes to this task.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">
                        Name
                    </Label>
                    <Input
                        id="name"
                        defaultValue={task.name}
                        className="col-span-3 w-[400px]"
                    />
                    <Label className="text-right align-top">
                        Description
                    </Label>
                    <Textarea 
                        id="description"
                        defaultValue={task.description}
                        className="col-span-3 p-3 border-gray-400 rounded-lg bg-gray-300 border h-[200px] w-[400px]"
                    />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Update Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );

}