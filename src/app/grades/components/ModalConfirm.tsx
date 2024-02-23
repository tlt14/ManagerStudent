import { Button, Modal } from "keep-react";
import { BiTrash } from "react-icons/bi";
interface IModalConfirmProps {
  onClickErrorModal: () => void;
  showErrorModalX: boolean;
  title: string;
  message: string;
}
export default function ModalConfirm({
  onClickErrorModal,
  showErrorModalX,
  title,
  message,
}: IModalConfirmProps) {
  return (
    <Modal
      icon={<BiTrash size={28} color="#E92215" />}
      size="md"
      show={showErrorModalX}
      onClose={onClickErrorModal}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-body-4 leading-relaxed text-metal-500">
            {message}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="outlineGray" onClick={onClickErrorModal}>
          Cancel
        </Button>
        <Button type="primary" color="error" onClick={onClickErrorModal}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
