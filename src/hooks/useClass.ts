import { IClass, classService } from "@/service/classesService";
import { IGrade, gradeService } from "@/service/gradeService";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
type useClassQueryOptions = Omit<
  UseQueryOptions<IClass[]>,
  "queryKey" | "queryFn"
>;
export const useClass = (options?: useClassQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ["classes"],
    queryFn: classService.getClasses,
  });
};
