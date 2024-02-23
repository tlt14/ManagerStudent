import axiosClient from "@/lib/axiosClient";
export interface IClass {
  id: string;
  name: string;
}
export const classService = {
  getClasses: (): Promise<IClass[]> =>
    axiosClient.get(`/grades`).then((res) => res.data),
};
