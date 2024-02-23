import { Button } from "keep-react";
import { SiMicrosoftexcel } from "react-icons/si";
import { CSVLink } from "react-csv";
export default function ExportBtn() {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];
  return (
    <CSVLink data={data} headers={headers} filename="data.csv">
      <Button type="outlinePrimary" color={"success"} size="md">
        <span className="pr-0 md:pr-2 lg:pr-2">
          <SiMicrosoftexcel size={24} />
        </span>
        <span className="hidden md:block lg:block">Xuất excel</span>
      </Button>
    </CSVLink>
  );
}
