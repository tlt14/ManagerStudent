import { ACTION_FORM } from "@/contants/actionForm";
import axiosClient from "@/lib/axiosClient";
import { IClass } from "@/service/classesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Label, Modal } from "keep-react";
import { useEffect, useState } from "react";

interface IModalFormClassProps {
  showModalX: boolean;

  actionForm: ACTION_FORM;
  toggleForm: () => void;
  classEdit: IClass | undefined;
}
export default function ModalFormClass({
  showModalX,
  actionForm,
  toggleForm,
  classEdit,
}: IModalFormClassProps) {
  const [name, setName] = useState<string>("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: Omit<IClass, "id">) => {
      return axiosClient.post("/grades", formData);
    },
    onSuccess: () => {
      // Invalidate and refetch data after a successful create operation
      queryClient.invalidateQueries({ queryKey: ["grades"] });
      toggleForm();
      setName("");
    },
  });
  const mutationUpdate = useMutation({
    mutationFn: (formData: IClass) => {
      return axiosClient.put(`/grades/${formData.id}`, formData);
    },
    onSuccess: () => {
      // Invalidate and refetch data after a successful create operation
      queryClient.invalidateQueries({ queryKey: ["grades"] });
      toggleForm();
      setName("");
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (actionForm === ACTION_FORM.ADD) {
      mutation.mutate({ name });
    } else {
      // mutationUpdate.mutate({ id: gradeEdit?.id as string, name });
    }
  };
  useEffect(() => {
    if (classEdit) {
      setName(classEdit.name);
    }
  }, [classEdit]);
  return (
    <Modal size="md" show={showModalX} onClose={toggleForm} color="#5E718D">
      <Modal.Header className="text-center">
        {actionForm === ACTION_FORM.ADD ? "Thêm" : "Sửa"} khối lớp
      </Modal.Header>
      <Modal.Body className="">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="#id-11" value="Tên khối lớp" />
            <input
              id="#id-11"
              placeholder="Nhập tên khối lớp"
              color="gray"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            />
          </div>
          <Modal.Footer>
            <Button type="outlineGray" onClick={toggleForm}>
              Hủy bỏ
            </Button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Xác nhận
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}
