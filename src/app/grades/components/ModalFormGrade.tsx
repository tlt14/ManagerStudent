import { ACTION_FORM } from "@/contants/actionForm";
import axiosClient from "@/lib/axiosClient";
import { IGrade } from "@/service/gradeService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Label, Modal, TextInput } from "keep-react";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsCloudArrowUpFill, BsPlusSquare } from "react-icons/bs";
import { PiWarningCircle } from "react-icons/pi";

interface IModalFormGradeProps {
  showModalX: boolean;

  actionForm: ACTION_FORM;
  toggleForm: () => void;
}
export default function ModalFormGrade({
  showModalX,
  actionForm,
  toggleForm,
}: IModalFormGradeProps) {
  const [name, setName] = useState<string>("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: Omit<IGrade, "id">) => {
      return axiosClient.post("/grades", formData);
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
    mutation.mutate({ name });
  };
  console.log({ name });
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
              // icon={<PiWarningCircle size={20} color="#5E718D" />}
              //   helperText="Info that helps a user with this field."
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
