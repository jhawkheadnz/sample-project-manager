<?php 

    namespace App\Http\Controllers;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;
    use Inertia\Response;

    use App\Models\Project;

    class DashboardController extends Controller {

        public function index(){

            $recentProjects = Project::latest()->get();

            return Inertia::render("dashboard", [
                'projects' => $recentProjects
            ]);

        }

    }