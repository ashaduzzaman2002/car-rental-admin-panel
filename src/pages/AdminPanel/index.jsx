import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";

const AdminPanelPage = () => {
  const sideBarMenu = [
    {
      label: (
        <div className="flex flex-col items-start justify-end md:pl-10 pl-[46px] pr-2 sm:px-5 py-2">
          <Text className="w-auto">All Cars</Text>
        </div>
      ),
      href: "/allcars",
      active: window.location.pathname === "/allcars",
    },
    {
      label: (
        <div className="flex flex-col items-end justify-end pl-[3px] pr-2 sm:px-5 py-2">
          <Text className="w-auto">Support / Help</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-col items-start justify-start md:pl-10 pl-[46px] pr-2 sm:px-5 py-2">
          <Text className="w-auto">Setting</Text>
        </div>
      ),
      href: "/settingprofile",
      active: window.location.pathname === "/settingprofile",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-prompt items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[275px] bg-white-A700 border border-gray-100 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
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
              className="flex flex-col items-center justify-end mb-[29px] mt-12 pt-[19px] px-5 w-[86%]"
            >
              <div className="flex flex-col gap-4 items-center justify-start pb-[9px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_home.svg"
                      alt="home"
                    />
                  }
                >
                  <Text className="w-auto">Dashboard</Text>
                </MenuItem>
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
                  <div className="flex flex-col gap-[-0.7px] items-center justify-end mt-[5px] w-full">
                    {sideBarMenu?.map((menu, i) => (
                      <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                        {menu.label}
                      </MenuItem>
                    ))}
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
                    <div className="md:pl-10 sm:px-5 pl-[46px] pr-2 justify-end items-start flex flex-col py-2">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border-b border-indigo-50 border-solid flex flex-col items-end justify-start p-[15px] w-full">
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
            <div className="flex flex-col gap-5 items-center justify-start w-[97%] md:w-full">
              <div className="bg-white-A700 border border-gray-100 border-solid flex md:flex-col flex-row gap-[29px] items-center justify-start rounded-[15px] w-full">
                <Img
                  className="h-[215px]"
                  src="images/img_group46.svg"
                  alt="groupFortySix"
                />
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                    size="txtPromptMedium22"
                  >
                    Live Performance
                  </Text>
                  <div className="gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-end p-[9px] rounded-[15px] w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[5px] w-auto">
                        <Button
                          className="flex h-11 items-center justify-center w-11"
                          shape="circle"
                          color="teal_50"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-[26px]"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPromptRegular14"
                          >
                            All Cars
                          </Text>
                          <Text
                            className="text-gray-800 text-lg w-auto"
                            size="txtPromptSemiBold18"
                          >
                            2000+
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-end p-[9px] rounded-[15px] w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="flex h-11 items-center justify-center w-11"
                          shape="circle"
                          color="cyan_50"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-[22px]"
                            src="images/img_frame_cyan_500.svg"
                            alt="frame_One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPromptRegular14"
                          >
                            My Member
                          </Text>
                          <Text
                            className="text-gray-800 text-lg w-auto"
                            size="txtPromptSemiBold18"
                          >
                            200+
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-end p-[9px] rounded-[15px] w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[5px] w-auto">
                        <Button
                          className="flex h-11 items-center justify-center w-11"
                          shape="circle"
                          color="deep_orange_50"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-7"
                            src="images/img_frame_deep_orange_600.svg"
                            alt="frame_Two"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPromptRegular14"
                          >
                            Daily Trips
                          </Text>
                          <Text
                            className="text-gray-800 text-lg w-auto"
                            size="txtPromptSemiBold18"
                          >
                            39+
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-start p-[9px] rounded-[15px] w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="flex h-11 items-center justify-center w-11"
                          shape="circle"
                          color="indigo_50_01"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_frame_indigo_a200.svg"
                            alt="frame_Three"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPromptRegular14"
                          >
                            Booking Cars
                          </Text>
                          <Text
                            className="text-gray-800 text-lg w-auto"
                            size="txtPromptSemiBold18"
                          >
                            100+
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-start pb-5 px-5 rounded-[15px] w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mb-2.5 w-full">
                  <div className="border-b border-gray-100 border-solid flex flex-col gap-[13px] items-start justify-center p-2.5 w-full">
                    <div className="flex flex-row md:gap-10 gap-[881px] items-center justify-between mt-2.5 w-auto md:w-full">
                      <Text
                        className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                        size="txtPromptMedium22"
                      >
                        My Member
                      </Text>
                      <a
                        href="javascript:"
                        className="text-gray-700 text-right text-sm w-auto"
                      >
                        <Text size="txtPromptMedium14">View All</Text>
                      </a>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-1 w-[88%] md:w-full">
                      <Text
                        className="h-7 text-gray-700 text-lg"
                        size="txtPromptMedium18"
                      >
                        No.
                      </Text>
                      <Text
                        className="ml-5 md:ml-[0] text-gray-700 text-lg"
                        size="txtPromptMedium18"
                      >
                        Code
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-gray-700"
                        size="txtPromptMedium16Gray700"
                      >
                        Name
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[263px] text-base text-gray-700"
                        size="txtPromptMedium16Gray700"
                      >
                        Email ID
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[215px] text-base text-gray-700"
                        size="txtPromptMedium16Gray700"
                      >
                        Status
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[127px] text-base text-gray-700"
                        size="txtPromptMedium16Gray700"
                      >
                        Action
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-5 items-start w-auto"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                      <Text
                        className="text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        01
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        6455
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[39px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268.png"
                          alt="ellipse268"
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
                        className="md:ml-[0] ml-[69px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        PhillipStanton@gmail.com
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[79px] md:ml-[0] ml-[82px] md:mt-0 my-1 text-base text-center"
                        shape="round"
                        color="light_green_50"
                        size="xs"
                        variant="fill"
                      >
                        Active
                      </Button>
                      <div className="flex flex-row gap-5 items-center justify-start ml-24 md:ml-[0] w-auto">
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
                        size="txtPromptRegular16"
                      >
                        02
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[27px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        4545
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[39px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268_40x40.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtPromptRegular16"
                          >
                            Lindsey George
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[130px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        LindseyGeorge@gmail.com
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[90px] md:ml-[0] ml-[69px] md:mt-0 my-1 text-base text-center"
                        shape="round"
                        color="orange_50"
                        size="xs"
                        variant="fill"
                      >
                        Inactive
                      </Button>
                      <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[85px] w-auto">
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
                        size="txtPromptRegular16"
                      >
                        03
                      </Text>
                      <Text
                        className="ml-7 md:ml-[0] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        5461
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[42px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268_1.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtPromptRegular16"
                          >
                            Zaire Carder
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[156px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        ZaireCarder@gmail.com
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[79px] md:ml-[0] ml-[94px] md:mt-0 my-1 text-base text-center"
                        shape="round"
                        color="light_green_50"
                        size="xs"
                        variant="fill"
                      >
                        Active
                      </Button>
                      <div className="flex flex-row gap-5 items-center justify-start ml-24 md:ml-[0] w-auto">
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
                        size="txtPromptRegular16"
                      >
                        04
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[27px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        8246
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[38px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268_2.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtPromptRegular16"
                          >
                            Kianna Aminoff
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[136px] text-base text-gray-800"
                        size="txtPromptRegular16"
                      >
                        KiannaAminoff@gmail.com
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[79px] md:ml-[0] ml-[74px] md:mt-0 my-1 text-base text-center"
                        shape="round"
                        color="light_green_50"
                        size="xs"
                        variant="fill"
                      >
                        Active
                      </Button>
                      <div className="flex flex-row gap-5 items-center justify-start ml-24 md:ml-[0] w-auto">
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
              <div className="bg-gray-50_02 flex flex-col items-center justify-start rounded-[15px] w-full">
                <div className="h-[325px] md:h-[333px] relative rounded-[15px] w-full">
                  <Img
                    className="h-[325px] m-auto object-cover rounded-[15px] w-full"
                    src="images/img_maps.png"
                    alt="maps"
                  />
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-[97%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-10 md:mt-0 mt-[35px] w-10"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Img
                        className="h-[35px] md:ml-[0] ml-[533px] w-[35px]"
                        src="images/img_car_gray_800.svg"
                        alt="car_One"
                      />
                      <Img
                        className="h-9 md:ml-[0] ml-[438px] md:mt-0 mt-9 w-9"
                        src="images/img_car_gray_800_36x36.svg"
                        alt="car_Two"
                      />
                    </div>
                    <Img
                      className="h-[34px] md:ml-[0] ml-[855px] mt-[87px] w-[34px]"
                      src="images/img_car_gray_800_34x34.svg"
                      alt="car_Three"
                    />
                    <Img
                      className="h-[34px] md:ml-[0] ml-[548px] mt-[27px] w-[34px]"
                      src="images/img_car_gray_800_34x34.svg"
                      alt="car_Four"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelPage;
