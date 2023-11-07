import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SettingProfilePage = () => {
  return (
    <>
      <div className="bg-gray-100_02 flex flex-col font-prompt items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[275px] bg-gray-50_02 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
            <div className="flex flex-col relative w-[97%] md:w-full">
              <div className="bg-blue-300 flex flex-col items-start justify-start mx-auto p-[77px] md:px-10 sm:px-5 rounded-tl-[15px] rounded-tr-[15px] w-full">
                <Text
                  className="mb-[78px] ml-0.5 md:ml-[0] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                  size="txtPromptSemiBold45"
                >
                  Account Setting
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[-87px] mx-auto px-10 sm:px-5 rounded-[15px] w-[90%] z-[1]">
                <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[39px] w-auto">
                  <Text
                    className="text-gray-800 text-xl w-auto"
                    size="txtPromptMedium20Gray800"
                  >
                    Menu
                  </Text>
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <div className="bg-blue-50_a2 flex flex-col h-11 items-center justify-start p-2.5 rounded-[14px] w-11">
                            <div className="flex flex-col h-6 items-center justify-start w-6">
                              <Img
                                className="h-6 w-6"
                                src="images/img_user_blue_300.svg"
                                alt="user_One"
                              />
                            </div>
                          </div>
                          <Text
                            className="text-base text-blue-300 w-auto"
                            size="txtPromptMedium16Blue300"
                          >
                            Profile
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-[15px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-11 items-center justify-center rounded-[14px] w-11"
                              color="gray_50_a2"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_frame_44x44.svg"
                                alt="frame"
                              />
                            </Button>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtPromptMedium16"
                            >
                              Privacy Policy
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-11 items-center justify-center rounded-[14px] w-11"
                              color="gray_100_a2_01"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_lock.svg"
                                alt="lock"
                              />
                            </Button>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtPromptMedium16"
                            >
                              Change Password
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-11 items-center justify-center rounded-[14px] w-11"
                              color="gray_50_a2"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_frame_1.svg"
                                alt="frame"
                              />
                            </Button>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtPromptMedium16"
                            >
                              Terms & Condition
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <Line className="bg-gray-100_04 h-[740px] md:h-px ml-10 md:ml-[0] md:w-full w-px" />
                <div className="flex flex-col gap-10 items-center justify-start md:ml-[0] ml-[39px] md:mt-0 mt-[38px] w-auto md:w-full">
                  <div className="flex flex-row sm:gap-10 gap-[497px] items-center justify-between w-auto md:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800 w-auto"
                      size="txtPromptSemiBold35"
                    >
                      Profile
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center outline outline-[1px] outline-white-A700 rounded-[50%] w-9"
                      shape="circle"
                      color="gray_100_05"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <div className="bg-white-A700 border border-gray-100_04 border-solid flex flex-col items-start justify-start rounded-[15px] w-auto">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                      <div className="flex flex-col gap-5 items-center justify-start w-auto">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[100px] items-center justify-start p-[13px] w-[100px]"
                            style={{
                              backgroundImage:
                                "url('images/img_group33962.png')",
                            }}
                          >
                            <Img
                              className="h-[73px] md:h-auto object-cover w-[73px]"
                              src="images/img_295.png"
                              alt="TwoHundredNinetyFive"
                            />
                          </div>
                          <Text
                            className="text-gray-800 text-lg w-auto"
                            size="txtPromptMedium18Gray800"
                          >
                            Jakob Levin
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group34360.svg')",
                            }}
                          >
                            <Text
                              className="ml-0.5 md:ml-[0] text-[15px] text-gray-400_01"
                              size="txtPromptRegular15"
                            >
                              First Name
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group34360.svg')",
                            }}
                          >
                            <Text
                              className="ml-0.5 md:ml-[0] text-[15px] text-gray-400_01"
                              size="txtPromptRegular15"
                            >
                              Last Name
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group34360.svg')",
                            }}
                          >
                            <Text
                              className="ml-0.5 md:ml-[0] text-[15px] text-gray-400_01"
                              size="txtPromptRegular15"
                            >
                              Email Address
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group34360.svg')",
                            }}
                          >
                            <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] w-auto">
                              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                <Text
                                  className="text-[15px] text-gray-400_01"
                                  size="txtPromptRegular15"
                                >
                                  +91
                                </Text>
                                <Img
                                  className="h-2.5 w-2.5"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown"
                                />
                              </div>
                              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                                <Line className="bg-gray-500_6c h-[23px] w-px" />
                                <Text
                                  className="text-[15px] text-gray-400_01 w-auto"
                                  size="txtPromptRegular15"
                                >
                                  0000 0000 00
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] rounded-[15px] text-center text-lg w-[294px]"
                        color="blue_300_87"
                        size="sm"
                        variant="fill"
                      >
                        Save
                      </Button>
                    </div>
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

export default SettingProfilePage;
