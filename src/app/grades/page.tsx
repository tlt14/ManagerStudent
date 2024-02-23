"use client";
import React from "react";
import TableGrades from "./components/TableGrades";
import ExportBtn from "./components/ExportBtn";
import FormGrade from "./components/FormGrade";
import { useGrade } from "@/hooks/useGrade";
export default function Page() {
  const { data, isLoading, isError } = useGrade();

  return (
    <main className="w-10/12 m-auto mt-2 rounded-md">
      <div className="flex items-center  gap-2">
        <ExportBtn />
        <FormGrade />
      </div>
      <TableGrades data={data} />
    </main>
  );
}
