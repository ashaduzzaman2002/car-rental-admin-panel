import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const MyMemberPage = () => {
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
            <div className="flex flex-col gap-[15px] items-start justify-start ml-5 md:ml-[0] mt-[57px] w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[55%]">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
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
                </div>
              </div>
              <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                <div className="bg-blue-50_99 flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[93%]">
                  <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[5px] w-auto">
                    <div className="bg-white-A700_a2 flex flex-col h-11 items-center justify-start p-2.5 rounded-[14px] w-11">
                      <div className="flex flex-col h-6 items-center justify-start w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user_blue_300.svg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <Text
                      className="text-base text-blue-300 w-auto"
                      size="txtPromptMedium16Blue300"
                    >
                      My Member
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue-300 h-[42px] rounded-bl-sm rounded-tl-sm w-[3px]" />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[46%]">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Button
                      className="flex h-11 items-center justify-center rounded-[14px] w-11"
                      color="gray_200_79"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_frame_gray_800.svg"
                        alt="frame"
                      />
                    </Button>
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPromptMedium16"
                    >
                      All Cars
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[69%]">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Button
                      className="flex h-11 items-center justify-center rounded-[14px] w-11"
                      color="gray_200_79"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_frame_gray_800_44x44.svg"
                        alt="frame_One"
                      />
                    </Button>
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPromptMedium16"
                    >
                      Support / Help
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[44%]">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Button
                      className="flex h-11 items-center justify-center rounded-[14px] w-11"
                      color="gray_200_79"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    </Button>
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPromptMedium16"
                    >
                      Setting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[17px] items-center justify-start mb-5 ml-5 md:ml-[0] mt-[498px] w-auto">
              <div className="bg-deep_orange-50_83 flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[93%]">
                <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[5px] w-auto">
                  <div className="bg-gray-200_79 flex flex-col h-11 items-center justify-start p-2.5 rounded-[14px] w-11">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <a
                    href="javascript:"
                    className="text-base text-red-A700 w-auto"
                  >
                    <Text size="txtPromptMedium16RedA700">Log Out</Text>
                  </a>
                </div>
              </div>
              <Line className="bg-gray-100_03 h-[42px] rounded-bl-sm rounded-tl-sm w-[3px]" />
            </div>
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
            <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-start pb-[11px] px-[11px] rounded-[15px] w-[97%] md:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-[99%] md:w-full">
                <div className="border-b border-gray-100 border-solid flex flex-col gap-[13px] items-start justify-center p-2.5 w-full">
                  <div className="flex flex-col items-center justify-start mt-2.5 w-auto">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                      size="txtPromptMedium22"
                    >
                      My Member
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-1 w-[88%] md:w-full">
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
                      size="txtPromptMedium16"
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
                      size="txtPromptMedium16"
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
                      size="txtPromptMedium16"
                    >
                      03
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[27px] text-base text-gray-800"
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
                      size="txtPromptMedium16"
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      05
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[27px] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      5454
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      06
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[27px] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      2547
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-10 md:ml-[0] w-auto">
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
                      className="cursor-pointer leading-[normal] min-w-[90px] md:ml-[0] ml-[74px] md:mt-0 my-1 text-base text-center"
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
                      size="txtPromptMedium16"
                    >
                      07
                    </Text>
                    <Text
                      className="ml-7 md:ml-[0] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      5274
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-10 md:ml-[0] w-auto">
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
                      className="cursor-pointer leading-[normal] min-w-[90px] md:ml-[0] ml-[74px] md:mt-0 my-1 text-base text-center"
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
                      size="txtPromptMedium16"
                    >
                      08
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[27px] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      5378
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-10 md:ml-[0] w-auto">
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      09
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[27px] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      3578
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-10 md:ml-[0] w-auto">
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      10
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[31px] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      8378
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      11
                    </Text>
                    <Text
                      className="ml-9 md:ml-[0] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      3783
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-10 md:ml-[0] w-auto">
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      12
                    </Text>
                    <Text
                      className="ml-8 md:ml-[0] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      7757
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[41px] w-auto">
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
                      className="cursor-pointer leading-[normal] min-w-[90px] md:ml-[0] ml-[74px] md:mt-0 my-1 text-base text-center"
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
                      size="txtPromptMedium16"
                    >
                      13
                    </Text>
                    <Text
                      className="ml-8 md:ml-[0] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      7555
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-10 md:ml-[0] w-auto">
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptMedium16"
                    >
                      14
                    </Text>
                    <Text
                      className="ml-8 md:ml-[0] text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      7898
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[39px] w-auto">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMemberPage;
