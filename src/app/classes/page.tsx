import { useClass } from "@/hooks/useClass";
import ExportBtn from "./components/ExportBtn";
import FormClasses from "./components/FormClasses";
import TableClass from "./components/TableGrades";
export default function Page() {
  const { data, isLoading, isError } = useClass();
  return (
    <main className="w-10/12 m-auto mt-2 rounded-md">
      <div className="flex items-center  gap-2">
        <ExportBtn />
        <FormClasses />
      </div>
      <TableClass data={data} />
    </main>
  );
}
