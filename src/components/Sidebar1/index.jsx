import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-row gap-[15px] items-center justify-start ml-5 md:ml-[0] mr-[76px] mt-[29px] w-auto">
          <Img
            className="h-[27px] w-[61px]"
            src="images/img_ticket.svg"
            alt="ticket"
          />
          <Text
            className="text-blue_gray-900 text-center text-xl w-auto"
            size="txtPromptMedium20"
          >
            <span className="text-blue_gray-900 font-prompt font-medium">
              Car{" "}
            </span>
            <span className="text-blue-300 font-prompt font-semibold">
              Rental
            </span>
          </Text>
        </div>
        <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[35px] mr-[100px] mt-[67px] w-auto">
          <Button
            className="flex h-11 items-center justify-center rounded-[14px] w-11"
            color="gray_100_a2"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_home_gray_800.svg"
              alt="home"
            />
          </Button>
          <Text
            className="text-base text-gray-800 w-auto"
            size="txtPromptMedium16"
          >
            Dashboard
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "18px 18px 18px 24px",
              gap: "22px",
              width: "100%",
              color: "#3a3a3a",
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Prompt",
              borderRadius: "10px",
              [`&:hover, &.ps-active`]: {
                color: "#5b9eff",
                backgroundColor: "#e6f0ff99 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[29px] mt-[15px] pt-[19px] px-5 w-[86%]"
        >
          <div className="flex flex-col gap-[25px] items-center justify-start pb-2 w-full">
            <SubMenu
              icon={
                <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
              }
              label={<Text className="w-auto">My Member</Text>}
            >
              <div className="flex flex-col items-center justify-end mt-[5px] w-full">
                <MenuItem active={window.location.pathname === "/allcars"}>
                  <div className="flex flex-col items-start justify-end md:pl-10 pl-[46px] pr-[9px] sm:px-5 py-[9px]">
                    <Text className="w-auto">All Cars</Text>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex flex-col items-end justify-end pl-[3px] pr-[9px] sm:px-5 py-[9px]">
                    <Text className="w-auto">Support / Help</Text>
                  </div>
                </MenuItem>
              </div>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
              active={window.location.pathname === "/settingprofile"}
            >
              <Text className="w-auto">Setting</Text>
            </MenuItem>
          </div>
          <div className="flex flex-col items-center justify-start mt-[498px] pb-2 w-full">
            <SubMenu
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
              }
              label={<Text className="text-red-A700 w-auto">Log Out</Text>}
            >
              <MenuItem>
                <div className="md:pl-10 sm:px-5 pl-[46px] pr-[9px] justify-end items-start flex flex-col py-[9px]">
                  Submenu Item
                </div>
              </MenuItem>
            </SubMenu>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
