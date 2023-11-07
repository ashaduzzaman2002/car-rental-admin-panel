import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SettingPrivacyPolicyPage = () => {
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
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-87px] mx-auto px-10 sm:px-5 rounded-[15px] w-[90%] z-[1]">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-10 w-auto">
                    <div className="flex flex-col gap-5 items-center justify-start w-auto">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[202px] items-center justify-start p-[26px] sm:px-5 w-[202px]"
                        style={{
                          backgroundImage: "url('images/img_group33962.png')",
                        }}
                      >
                        <Img
                          className="h-[148px] md:h-auto object-cover w-[148px]"
                          src="images/img_295.png"
                          alt="TwoHundredNinetyFive"
                        />
                      </div>
                      <Text
                        className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                        size="txtPromptMedium22"
                      >
                        Jakob Levin
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
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
                              <div className="bg-gray-100_a2_01 flex flex-col h-11 items-center justify-start p-2.5 rounded-[14px] w-11">
                                <div className="flex flex-col h-6 items-center justify-start w-6">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_One"
                                  />
                                </div>
                              </div>
                              <Text
                                className="text-base text-gray-800 w-auto"
                                size="txtPromptMedium16"
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
                                  color="blue_50_a2"
                                  size="sm"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-6"
                                    src="images/img_frame_blue_300_44x44.svg"
                                    alt="frame"
                                  />
                                </Button>
                                <Text
                                  className="text-base text-blue-300 w-auto"
                                  size="txtPromptMedium16Blue300"
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
                                  color="gray_100_a2"
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
                  </div>
                  <Line className="bg-gray-100_04 h-[740px] md:h-px md:w-full w-px" />
                  <div className="flex flex-col gap-3 items-start justify-start md:mt-0 mt-[42px]">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
                      size="txtPromptSemiBold35"
                    >
                      Privacy Policy
                    </Text>
                    <div className="bg-white-A700 border border-gray-100_04 border-solid flex sm:flex-col flex-row gap-[30px] items-start justify-between p-2.5 rounded-[15px] w-full">
                      <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-start ml-2.5 sm:ml-[0] sm:mt-0 mt-2.5 w-auto sm:w-full">
                        <Text
                          className="max-w-[578px] md:max-w-full text-gray-700 text-lg"
                          size="txtPromptRegular18"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce quis ante ornare, venenatis tortor sed,
                          fringilla ante. Morbi nec semper justo. Cras eget
                          rhoncus urna, eu fringilla nibh. Class aptent taciti
                          sociosqu ad litora torquent per conubia nostra, per
                          inceptos himenaeos. Nam pretium eleifend neque, vel
                          blandit erat iaculis id. Etiam ut lectus vitae metus
                          convallis condimentum quis cursus mi. Aenean non
                          varius enim.
                        </Text>
                        <Text
                          className="max-w-[578px] md:max-w-full text-gray-700 text-lg"
                          size="txtPromptRegular18"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce quis ante ornare, venenatis tortor sed,
                          fringilla ante. Morbi nec semper justo. Cras eget
                          rhoncus urna, eu fringilla nibh. Class aptent taciti
                          sociosqu ad litora torquent per conubia
                        </Text>
                        <Text
                          className="max-w-[578px] md:max-w-full text-gray-700 text-lg"
                          size="txtPromptRegular18"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce quis ante ornare, venenatis tortor sed,
                          fringilla ante. Morbi nec semper justo. Cras eget
                          rhoncus urna, eu fringilla nibh. Class aptent taciti
                          sociosqu ad litora torquent per conubia nostra, per
                          inceptos himenaeos. Nam pretium eleifend neque, vel
                          blandit erat iaculis id. Etiam ut lectus vitae metus
                          convallis{" "}
                        </Text>
                      </div>
                      <div className="h-[582px] relative w-[1%] sm:w-full">
                        <Line className="bg-gray-100_06 h-[582px] m-auto rounded-sm w-[5px]" />
                        <Line className="absolute bg-blue-300 h-[83px] inset-x-[0] mx-auto rounded-sm top-[13%] w-[5px]" />
                      </div>
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

export default SettingPrivacyPolicyPage;
