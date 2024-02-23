import { Button } from "keep-react";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import ModalFormGrade from "./ModalFormGrade";
import { ACTION_FORM } from "@/contants/actionForm";

export default function FormGrade() {
  const [showModal, setShowModal] = useState(false);

  const toggleForm = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Button onClick={toggleForm} type="primary">
        <span className="pr-0 md:pr-2 lg:pr-2">
          <BsPlus size={24} />
        </span>
        <span className="hidden md:block lg:block">Thêm khối lớp</span>
      </Button>
      <ModalFormGrade
        showModalX={showModal}
        actionForm={ACTION_FORM.ADD}
        toggleForm={toggleForm}
      />
    </>
  );
}
