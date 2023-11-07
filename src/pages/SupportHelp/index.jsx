import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const SupportHelpPage = () => {
  return (
    <>
      <div className="bg-gray-100_02 flex sm:flex-col md:flex-col flex-row font-prompt sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[275px] bg-gray-50_02 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
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
                padding: "19px 19px 19px 24px",
                gap: "22px",
                width: "100%",
                color: "#3a3a3a",
                fontWeight: 500,
                fontSize: "16px",
                borderRadius: "10px",
                [`&:hover, &.ps-active`]: {
                  color: "#5b9eff",
                  backgroundColor: "#e6f0ff99 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mb-[29px] mt-[15px] pt-[19px] px-5 w-[86%]"
          >
            <div className="flex flex-col gap-[27px] items-center justify-start pb-[9px] w-full">
              <SubMenu
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_user.svg"
                    alt="user"
                  />
                }
                label={<Text className="w-auto">My Member</Text>}
              >
                <div className="flex flex-col items-center justify-end mt-[13px] w-full">
                  <MenuItem
                    active={window.location.pathname === "/allcars"}
                    href="/allcars"
                  >
                    <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[46px]">
                      <Text className="w-auto">All Cars</Text>
                    </div>
                  </MenuItem>
                </div>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_frame_blue_300_24x24.svg"
                    alt="frame"
                  />
                }
                label={<Text className="w-auto">Support / Help</Text>}
              >
                <div className="flex flex-col items-center justify-end mt-[15px] w-full">
                  <MenuItem
                    active={window.location.pathname === "/settingprofile"}
                    href="/settingprofile"
                  >
                    <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[46px]">
                      <Text className="w-auto">Setting</Text>
                    </div>
                  </MenuItem>
                </div>
              </SubMenu>
            </div>
            <div className="flex flex-col items-center justify-start mt-[507px] pb-2 w-full">
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
                  <div className="md:pl-10 sm:pl-5 pl-[46px] justify-start items-start flex flex-col">
                    Submenu Item
                  </div>
                </MenuItem>
              </SubMenu>
            </div>
          </Menu>
        </Sidebar>
        <div className="bg-gray-50_02 flex flex-1 flex-col items-end justify-start mb-[1006px] p-[15px] md:px-5 w-full">
          <div className="flex flex-row gap-[15px] items-start justify-start mr-[5px] w-auto">
            <Button
              className="cursor-pointer font-medium leading-[normal] text-base text-center w-[99px]"
              shape="round"
              color="gray_50"
              size="sm"
              variant="fill"
            >
              Log In
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] text-base text-center w-[99px]"
              shape="round"
              color="gray_50"
              size="sm"
              variant="fill"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportHelpPage;
