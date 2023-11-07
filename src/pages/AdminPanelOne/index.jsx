import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const AdminPanelOnePage = () => {
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
        <div className="flex flex-col items-center justify-end pl-[3px] pr-2 sm:px-5 py-2">
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
      <div className="bg-gray-100_06 flex flex-col font-prompt items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[300px] bg-gray-50_02 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex flex-row gap-[15px] items-center justify-start ml-5 md:ml-[0] mr-[101px] mt-[29px] w-auto">
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
              className="flex flex-col items-center justify-end mb-[29px] mt-[90px] pt-[19px] px-5 w-[87%]"
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
              <div className="flex flex-col items-center justify-start mt-[465px] pb-2 w-full">
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
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-50_02 flex flex-col items-end justify-start p-[15px] w-full">
              <div className="flex flex-row gap-[30px] items-center justify-start mr-[15px] w-auto">
                <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
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
                <div className="flex flex-row font-montserrat gap-[15px] items-start justify-start w-auto">
                  <div className="bg-gray-100_05 flex flex-col h-9 items-center justify-start outline outline-[1px] outline-white-A700 p-1.5 rounded-[50%] shadow-bs w-9">
                    <div className="md:h-5 h-[22px] relative w-[22px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto w-[22px]"
                        style={{
                          backgroundImage: "url('images/img_group27.svg')",
                        }}
                      >
                        <div className="bg-red-A700 h-[9px] mb-[11px] rounded w-[9px]"></div>
                      </div>
                      <Text
                        className="absolute right-[18%] text-[6px] text-right text-white-A700 top-[0]"
                        size="txtMontserratMedium6"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-9 items-center justify-start w-9">
                    <Img
                      className="h-9 md:h-auto rounded-[50%] w-9"
                      src="images/img_screenshot20230704.png"
                      alt="screenshot20230"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-[97%] md:w-full">
              <div className="bg-gray-50_02 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pr-10 sm:pr-5 pr-[81px] rounded-[10px] w-full">
                <Img
                  className="h-[235px] md:h-auto object-cover rounded-br-[10px] rounded-tr-[10px]"
                  src="images/img_rectangle2543.png"
                  alt="rectangle2543"
                />
                <div className="flex md:flex-1 flex-col gap-[35px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                    size="txtPromptMedium22"
                  >
                    Live Performance
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-between w-[15%] md:w-full">
                      <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtPromptRegular16Gray700"
                        >
                          All Cars
                        </Text>
                        <Text
                          className="text-base text-gray-800 w-auto"
                          size="txtPromptMedium16"
                        >
                          2000+
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start mb-0.5 mt-[27px] w-auto">
                        <Img
                          className="h-4 w-[45px]"
                          src="images/img_call.svg"
                          alt="call"
                        />
                        <Text
                          className="text-green-200 text-sm w-auto"
                          size="txtPromptMedium14Green200"
                        >
                          1.5
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-4/5 md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-row gap-[81px] items-start justify-start w-auto">
                        <Line className="bg-gray-200_02 h-[51px] w-px" />
                        <div className="flex relative w-[64%]">
                          <div className="flex flex-col gap-[3px] items-start justify-start my-auto w-auto">
                            <Text
                              className="text-base text-gray-700 w-auto"
                              size="txtPromptRegular16Gray700"
                            >
                              My Members
                            </Text>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtPromptMedium16"
                            >
                              200+
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-between mb-0.5 ml-[-30px] mt-auto w-auto z-[1]">
                            <Img
                              className="h-4 w-[45px]"
                              src="images/img_group34247.svg"
                              alt="group34247"
                            />
                            <Text
                              className="text-red-300_02 text-sm w-auto"
                              size="txtPromptMedium14Red30002"
                            >
                              1.5
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[81px] items-start justify-start w-auto">
                        <Line className="bg-gray-200_02 h-[51px] w-px" />
                        <div className="flex relative w-[63%]">
                          <div className="flex flex-col gap-[3px] items-start justify-start my-auto w-auto">
                            <Text
                              className="text-base text-gray-700 w-auto"
                              size="txtPromptRegular16Gray700"
                            >
                              Daily Trips
                            </Text>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtPromptMedium16"
                            >
                              20+
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-between mb-2 ml-[-10px] mt-auto w-auto z-[1]">
                            <Img
                              className="h-4 w-[45px]"
                              src="images/img_rewind.svg"
                              alt="rewind"
                            />
                            <Text
                              className="text-[9px] text-lime-400_01 w-auto"
                              size="txtPromptMedium9"
                            >
                              1.5
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[81px] items-start justify-start w-auto">
                        <Line className="bg-gray-200_02 h-[51px] w-px" />
                        <div className="h-[51px] md:h-[53px] relative w-[63%]">
                          <div className="absolute flex flex-col gap-[3px] h-full inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
                            <Text
                              className="text-base text-gray-700 w-auto"
                              size="txtPromptRegular16Gray700"
                            >
                              Booking Cars
                            </Text>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtPromptMedium16"
                            >
                              100+
                            </Text>
                          </div>
                          <div className="absolute bottom-[16%] flex flex-row gap-2.5 items-center justify-between right-[0] w-auto">
                            <Img
                              className="h-4 w-[45px]"
                              src="images/img_fire.svg"
                              alt="fire"
                            />
                            <Text
                              className="text-[9px] text-blue_gray-300 w-auto"
                              size="txtPromptMedium9Bluegray300"
                            >
                              1.5
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50_02 flex flex-col items-center justify-start pb-[30px] rounded-[10px] w-full">
                <div className="flex flex-col gap-[30px] justify-start w-full">
                  <div className="border-b border-gray-200_03 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3.5 w-full">
                    <Text
                      className="h-7 sm:ml-[0] ml-[35px] text-gray-800 text-lg"
                      size="txtPromptMedium18Gray800"
                    >
                      No.
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[70px] text-gray-800 text-lg"
                      size="txtPromptMedium18Gray800"
                    >
                      Code
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[126px] text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      Name
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[323px] text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      Email ID
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[332px] text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      Status
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[197px] text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      Action
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-5 md:ml-[0] ml-[50px] w-[87%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtPromptMedium14Gray800"
                      >
                        01
                      </Text>
                      <Text
                        className="bg-gray-100_07 justify-center md:ml-[0] ml-[83px] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-gray-800 text-sm w-auto"
                        size="txtPromptRegular14Gray800"
                      >
                        6455
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[120px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPromptRegular14Gray800"
                          >
                            Phillip Stanton Bothman
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[152px] text-gray-800 text-sm"
                        size="txtPromptRegular14Gray800"
                      >
                        PhillipStanton@gmail.com
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[223px] w-auto">
                        <Text
                          className="bg-light_green-50 justify-center px-2.5 rounded-[5px] text-green-600 text-sm w-auto"
                          size="txtPromptRegular14Green600"
                        >
                          Active
                        </Text>
                      </div>
                      <Text
                        className="bg-red-50 justify-center md:ml-[0] ml-[182px] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-red-A200 text-sm w-auto"
                        size="txtPromptRegular14RedA200"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtPromptMedium14Gray800"
                      >
                        02
                      </Text>
                      <Text
                        className="bg-gray-100_07 justify-center ml-20 md:ml-[0] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-gray-800 text-sm w-auto"
                        size="txtPromptRegular14Gray800"
                      >
                        2233
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[120px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268_40x40.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPromptRegular14Gray800"
                          >
                            Lindsey George
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[205px] text-gray-800 text-sm"
                        size="txtPromptRegular14Gray800"
                      >
                        LindseyGeorge@gmail.com
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[212px] w-auto">
                        <Text
                          className="bg-orange-50 justify-center px-2.5 rounded-[5px] text-lime-700 text-sm w-auto"
                          size="txtPromptRegular14Lime700"
                        >
                          Non-Active
                        </Text>
                      </div>
                      <Text
                        className="bg-gray-200_04 justify-center md:ml-[0] ml-[149px] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-gray-500_01 text-sm w-auto"
                        size="txtPromptRegular14Gray50001"
                      >
                        Report
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtPromptMedium14Gray800"
                      >
                        03
                      </Text>
                      <Text
                        className="bg-gray-100_07 justify-center ml-20 md:ml-[0] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-gray-800 text-sm w-auto"
                        size="txtPromptRegular14Gray800"
                      >
                        5461
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[122px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268_1.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPromptRegular14Gray800"
                          >
                            Zaire Carder
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[228px] text-gray-800 text-sm"
                        size="txtPromptRegular14Gray800"
                      >
                        ZaireCarder@gmail.com
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[234px] w-auto">
                        <Text
                          className="bg-light_green-50 justify-center px-2.5 rounded-[5px] text-green-600 text-sm w-auto"
                          size="txtPromptRegular14Green600"
                        >
                          Active
                        </Text>
                      </div>
                      <Text
                        className="bg-red-50 justify-center md:ml-[0] ml-[182px] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-red-A200 text-sm w-auto"
                        size="txtPromptRegular14RedA200"
                      >
                        Delete
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtPromptMedium14Gray800"
                      >
                        04
                      </Text>
                      <Text
                        className="bg-gray-100_07 justify-center md:ml-[0] ml-[79px] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-gray-800 text-sm w-auto"
                        size="txtPromptRegular14Gray800"
                      >
                        8246
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[119px] w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse268_2.png"
                          alt="ellipse268"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPromptRegular14Gray800"
                          >
                            Kianna Aminoff
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[210px] text-gray-800 text-sm"
                        size="txtPromptRegular14Gray800"
                      >
                        KiannaAminoff@gmail.com
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[217px] w-auto">
                        <Text
                          className="bg-light_green-50 justify-center px-2.5 rounded-[5px] text-green-600 text-sm w-auto"
                          size="txtPromptRegular14Green600"
                        >
                          Active
                        </Text>
                      </div>
                      <Text
                        className="bg-red-50 justify-center md:ml-[0] ml-[182px] md:mt-0 my-[7px] px-2.5 rounded-[5px] text-red-A200 text-sm w-auto"
                        size="txtPromptRegular14RedA200"
                      >
                        Delete
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start rounded-[10px] w-full">
                <div className="h-[314px] relative rounded-[10px] w-full">
                  <Img
                    className="h-[314px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_image19.png"
                    alt="imageNineteen"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[126px] justify-start left-[9%] top-[2%] w-3/4">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-10 md:mt-0 mt-[22px] w-10"
                        src="images/img_car_white_a700.svg"
                        alt="car"
                      />
                      <Img
                        className="h-7 md:ml-[0] ml-[225px] md:mt-0 mt-[50px] w-7"
                        src="images/img_car_white_a700_28x28.svg"
                        alt="car_One"
                      />
                      <Img
                        className="h-7 md:ml-[0] ml-[446px] md:mt-0 mt-[52px] w-7"
                        src="images/img_car_28x28.svg"
                        alt="car_Two"
                      />
                      <Img
                        className="h-12 mb-8 md:ml-[0] ml-[343px] w-12"
                        src="images/img_group34259.svg"
                        alt="group34259"
                      />
                    </div>
                    <Img
                      className="h-6 md:ml-[0] ml-[1026px] w-6"
                      src="images/img_car_white_a700_24x24.svg"
                      alt="car_Three"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[31px] right-[45%]"
                    src="images/img_car_white_a700_31x33.svg"
                    alt="car_Four"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelOnePage;
