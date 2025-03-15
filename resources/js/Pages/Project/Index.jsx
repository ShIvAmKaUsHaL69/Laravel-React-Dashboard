import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, projects }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gry-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 bordedr-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Logo</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Create Date</th>
                    <th className="px-3 py-3">Due Date</th>
                    <th className="px-3 py-3">Created By</th>
                    <th className="px-3 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {projects.data.map(project => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                        <td className="px-3 py-3">{project.id}</td>
                        <td className="px-3 py-3"></td>
                        <td className="px-3 py-3">{project.name}</td>
                        <td className="px-3 py-3">{project.status}</td>
                        <td className="px-3 py-3 text-nowrap">{project.created_at}</td>
                        <td className="px-3 py-3 text-nowrap">{project.due_date}</td>
                        <td className="px-3 py-3">{project.createdBy.name}</td>
                        <td className="px-3 py-3">
                            <Link href={route('project.edit', project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                            <Link href={route('project.destroy', project.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">Delete</Link>
                        </td>
                    </tr>
                    ))}    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
