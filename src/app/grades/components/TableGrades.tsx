"use client";
import { Avatar, Button, Table, Popover } from "keep-react";
import { Cube, DotsThreeOutline, Trash, Pencil } from "phosphor-react";
import { useState } from "react";
import ModalFormGrade from "./ModalFormGrade";
import { ACTION_FORM } from "@/contants/actionForm";
import ModalConfirm from "./ModalConfirm";
import { IGrade } from "@/service/gradeService";
import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
interface IProps {
  data: IGrade[] | undefined;
}
const deleteGrade = async (id: string) => {
  await axiosClient.delete(`/grades/${id}`);
};
export default function TableGrades({ data }: IProps) {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
  const onClickErrorModal = () => {
    setShowModalConfirm(!showModalConfirm);
  };
  const onClickTwo = () => {
    setShowModal(!showModal);
  };
  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteGrade(id),
    onSuccess: () => {
      // Invalidate and refetch data after a successful delete operation
      queryClient.invalidateQueries({ queryKey: ["grades"] });
    },
  });
  return (
    <>
      <Table hoverable={true} striped={true} className="mt-2">
        <Table.Caption className="bg-slate-800">
          <div className="my-2 flex items-center justify-between px-6 ">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-50">
                Danh sách khối lớp
              </p>
            </div>
            {/* <div className="flex items-center gap-5">
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Filter
            </Button>
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Search
            </Button>
          </div> */}
          </div>
        </Table.Caption>
        <Table.Head className="divide-gray-25 divide-y bg-slate-800 ">
          <Table.HeadCell className="min-w-[10px] text-metal-100">
            <p className="text-body-6 font-medium ">STT</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[120px] text-metal-100">
            Tên khối lớp
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[120px] text-metal-100">
            Ghi chú
          </Table.HeadCell>
          <Table.HeadCell className="max-w-[50px]"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="!border-none">
          {data?.map((item, index) => (
            <Table.Row className="!bg-gray-800" key={item.id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <p className="text-body-5 font-medium text-metal-500">
                        {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {item.name}
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  Lorem ipsum
                </p>
              </Table.Cell>
              <Table.Cell>
                <Popover
                  showDismissIcon={false}
                  showArrow={false}
                  className="w-52 border border-metal-100 p-2"
                >
                  <Popover.Container className="!mt-0 !block">
                    <ul>
                      <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button
                          className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600"
                          onClick={() => {
                            deleteMutation.mutate(item.id);
                          }}
                        >
                          <span>Delete</span>
                          <span>
                            <Trash />
                          </span>
                        </button>
                      </li>
                      <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button
                          className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600"
                          onClick={onClickTwo}
                        >
                          <span>Edit</span>
                          <span>
                            <Pencil />
                          </span>
                        </button>
                      </li>
                    </ul>
                  </Popover.Container>
                  <Popover.Action>
                    <Button type="outlineGray" size="xs" circle={true}>
                      <DotsThreeOutline
                        size={14}
                        color="#5E718D"
                        weight="bold"
                      />
                    </Button>
                  </Popover.Action>
                </Popover>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ModalFormGrade
        actionForm={ACTION_FORM.EDIT}
        showModalX={showModal}
        toggleForm={onClickTwo}
      />
      <ModalConfirm
        onClickErrorModal={onClickErrorModal}
        showErrorModalX={showModalConfirm}
        title={"Xóa khối lớp"}
        message={"Bạn chắc chắn muốn xoá khối lớp"}
      />
    </>
  );
}
