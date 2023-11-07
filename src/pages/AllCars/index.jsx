import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";

const AllCarsPage = () => {
  return (
    <>
      <div className="bg-gray-100_02 flex flex-col font-prompt items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
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
              <div className="flex flex-col gap-[13px] items-center justify-start pb-2.5 w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  active={window.location.pathname === "/mymember"}
                  href="/mymember"
                >
                  <Text className="w-auto">My Member</Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_frame_blue_300.svg"
                      alt="frame"
                    />
                  }
                  label={<Text className="w-auto">All Cars</Text>}
                >
                  <div className="flex flex-col items-center justify-end mt-2 w-full">
                    <MenuItem>
                      <div className="flex flex-col items-end justify-start pl-[3px] pr-2 sm:px-5 py-2">
                        <Text className="w-auto">Support / Help</Text>
                      </div>
                    </MenuItem>
                    <MenuItem
                      active={window.location.pathname === "/settingprofile"}
                      href="/settingprofile"
                    >
                      <div className="flex flex-col items-start justify-end md:pl-10 pl-[46px] pr-2 sm:px-5 py-2">
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
                    <div className="sm:px-5 pl-[3px] pr-2 justify-start items-end flex flex-col py-2">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
            <div className="bg-gray-50_02 flex flex-col items-end justify-start p-[15px] w-full">
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
            <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col gap-[15px] items-center justify-start pb-[11px] px-[11px] rounded-[15px] w-[97%] md:w-full">
              <div className="border-b border-gray-100 border-solid flex flex-col items-start justify-start p-2.5 w-[99%] md:w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start mb-1 mt-2.5 w-[88%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                      size="txtPromptMedium22"
                    >
                      My Member
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="h-7 text-gray-700 text-lg"
                      size="txtPromptMedium18"
                    >
                      No.
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[25px] text-gray-700 text-lg"
                      size="txtPromptMedium18"
                    >
                      Car Photo
                    </Text>
                    <Text
                      className="ml-10 sm:ml-[0] text-base text-gray-700"
                      size="txtPromptMedium16Gray700"
                    >
                      Customer Name
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[249px] text-base text-gray-700"
                      size="txtPromptMedium16Gray700"
                    >
                      Car Name
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[253px] text-base text-gray-700"
                      size="txtPromptMedium16Gray700"
                    >
                      Action
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-5 items-start w-auto"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    01
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[50px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_50x50.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    BMW X4 Sports
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start ml-52 md:ml-[0] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    02
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_3.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_40x40.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Mahindra XUV700
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[188px] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    03
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_4.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_1.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Maruti FRONX
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[221px] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    04
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_5.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_2.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Toyota Fortuner
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start ml-52 md:ml-[0] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    05
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_6.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Mahindra XUV700
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[188px] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    06
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_50x50.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_40x40.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Maruti FRONX
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[221px] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    07
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[47px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_3.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_1.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Toyota Fortuner
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start ml-52 md:ml-[0] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    08
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_4.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_2.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    BMW X4 Sports
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start ml-52 md:ml-[0] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    09
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[46px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_5.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_40x40.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Mahindra XUV700
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[188px] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    10
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[50px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_6.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_1.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Maruti FRONX
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[221px] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    11
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[55px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_3.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268_2.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    Toyota Fortuner
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start ml-52 md:ml-[0] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="text-base text-gray-800"
                    size="txtPromptMedium16"
                  >
                    12
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[51px] rounded-[50%] w-[50px]"
                    src="images/img_ellipse268_50x50.png"
                    alt="ellipse268"
                  />
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[65px] w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse268.png"
                      alt="ellipse268_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtPromptRegular16"
                      >
                        Phillip Stanton Bothman
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[135px] text-base text-gray-800"
                    size="txtPromptRegular16"
                  >
                    BMW X4 Sports
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start ml-52 md:ml-[0] w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Text
                        className="text-base text-red-500 w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_frame_light_blue_a700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-light_blue-A700 w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCarsPage;
