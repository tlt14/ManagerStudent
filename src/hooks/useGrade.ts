import { IGrade, gradeService } from "@/service/gradeService";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
type useGradeQueryOptions = Omit<
  UseQueryOptions<IGrade[]>,
  "queryKey" | "queryFn"
>;
export const useGrade = (options?: useGradeQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ["grades"],
    queryFn: gradeService.getGrades,
  });
};
