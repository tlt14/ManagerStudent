import axiosClient from "@/lib/axiosClient";
export interface IGrade {
  id: string;
  name: string;
}
export const gradeService = {
  getGrades: (): Promise<IGrade[]> =>
    axiosClient.get(`/grades`).then((res) => res.data),
};
