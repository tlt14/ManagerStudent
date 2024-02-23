"use client";
import Image from "next/image";
import { Navbar } from "keep-react";
import Link from "next/link";
import SigninButton from "./SignInButton";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="px-0 py-2 bg-gray-700 sticky top-0 z-50">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand className="flex items-center gap-2">
            <Image
              src="/cropped-LOGO-GIAO-PHAN-FINAL.png"
              alt="logo"
              width="50"
              height="40"
            />
            <h1 className="text-white font-bold">GXTS</h1>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-end gap-8 "
          >
            {/* <Navbar.Link linkName="Trang chủ" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" /> */}
            <Link href="/" className="text-white py-5">
              Trang chủ
            </Link>
            <SigninButton />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Link href="/" className="text-black">
                Trang chủ
              </Link>
              <Link href="/grades " className="text-black">
                Khối lớp
              </Link>
              <Link href="/classes " className="text-black">
                Quản lý lớp học
              </Link>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Navbar.Toggle className="bg-white p-2 rounded-sm" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
