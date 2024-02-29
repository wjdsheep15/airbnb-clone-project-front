"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ViewMore1 from "./viewMore1";
import ViewMore2 from "./viewMore2";

export default function SignUpButton() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setChecked(event.target.checked);
  };
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleHangeulLastName = (event: { target: { value: any } }) => {
    const inputLast = event.target.value;
    // 입력값이 숫자인지 확인
    if (/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(inputLast)) {
      setLastName(inputLast);
    }
  };
  const handleHangeulFirstName = (event: { target: { value: any } }) => {
    const inputFirst = event.target.value;
    // 입력값이 숫자인지 확인
    if (/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(inputFirst)) {
      setFirstName(inputFirst);
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="text-white bg-pink-700 hover:bg-pink-700 mt-5 transition-transform duration-400 active:scale-90 border-solid border-black rounded-lg text-2xl font-bold w-[620px] h-[60px]"
      >
        계속
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl
           bg-white border-2 border-black shadow-lg p-16 w-[745px] h-[820px]"
        >
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] rounded-lg p-8">
            <div className="divide-y-2 divide-gray-400 w-[800px] -ml-16 -mt-8">
              <div>
                <header>
                  <Button onClick={handleClose}>
                    <Image
                      src="/svgIcons/leftAngle.svg"
                      alt="My leftAngle SVG"
                      width={20}
                      height={20}
                      className="ml-20 -mt-20"
                    />
                  </Button>
                  <div className="text-xl font-semibold -mt-16 ml-80">
                    회원 가입 완료하기
                  </div>
                </header>
              </div>
              <div className="mt-4 ml-16"></div>
            </div>
            <div className="max-h-[600px] overflow-y-auto overflow-x-hidden">
              <TextField
                className="mt-10 ml-8 w-[650px]"
                placeholder="이름(예: 길동)"
                value={lastName}
                onChange={handleHangeulLastName}
              ></TextField>
              <TextField
                className="ml-8 w-[650px]"
                placeholder="성(예: 홍)"
                value={firstName}
                onChange={handleHangeulFirstName}
              />

              <Typography className="ml-8 w-[650px]">
                정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
              </Typography>

              <TextField
                className="ml-8 mt-8 w-[650px]"
                placeholder="생년월일"
              ></TextField>
              <Typography className="ml-8 w-[650px]">
                18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
                에어비앤비의 다른 회원에게 공개되지 않습니다.
              </Typography>

              {/* 입력했던 이메일 값이 오도록 함(검증). 그리고 이메일 형식이 아니면 빨강으로 표시 */}
              <TextField
                className="ml-8 mt-8 w-[650px]"
                placeholder="이메일"
              ></TextField>
              <Typography className="ml-8 w-[650px]">
                예약 확인과 영수증을 이메일로 보내드립니다.
              </Typography>

              {/* 비밀번호 검증 필요*/}
              <div className="divide-y-2 divide-gray-400 w-[740px] mt-4">
                <div>
                  <OutlinedInput
                    className="ml-8 mt-8 w-[650px]"
                    placeholder="비밀번호"
                    type={showPassword ? "text" : "password"}
                    label="패스워드"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="w-[800px] mt-8 -ml-8"></div>
              </div>

              {/* 체크 박스 */}
              <div>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" onChange={handleCheckboxChange} />
                  }
                  label={
                    <>
                      개인 정보 수집 및 이용에 동의합니다.
                      <br />
                      1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을
                      이용하는 데 필요한 정보
                      <br />
                      당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의
                      개인 정보를 수집합니다.
                      <br />
                      그렇지 않은 경우, 에어비앤비는 요청하신 서비스를 회원님께
                      제공하지 못할 수 있습니다.
                      <br />
                      이러한 정보에는 다음이 포함됩니다.
                    </>
                  }
                  labelPlacement="start"
                  className="w-[680px] mt-4 ml-8"
                />

                {/* 추가 모달 */}

                <ViewMore1 />
              </div>

              {/* 체크 박스 */}
              <div>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" onChange={handleCheckboxChange} />
                  }
                  label={
                    <>
                      마케팅 이메일 수신을 원합니다( 선택).
                      <br />
                      에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일,
                      푸시 알림을 보내드립니다.
                      <br />
                      계정 설정 또는 마케팅 알림에서 언제든지 수신을 거부할 수
                      있습니다.
                    </>
                  }
                  labelPlacement="start"
                  className="w-[680px] mt-4 ml-2"
                />

                {/* 추가 모달 */}
                <ViewMore2 />
              </div>
              <div className="mt-4 border-t border-gray-400"></div>

              <Typography className="mt-8 ml-8">
                동의 및 계속하기를 선택하여 에어비앤비 서비스 약관, 결제 서비스
                약관, 위치기반서비스 이용약관, 차별 금지 정책, 개인정보
                처리방침에 동의합니다.
              </Typography>

              <Button
                onClick={handleOpen}
                className="text-white bg-pink-700 hover:bg-pink-700 mt-5 ml-8 
                transition-transform duration-400 active:scale-90 border-solid border-black 
                rounded-lg text-2xl font-bold w-[620px] h-[60px]"
              >
                동의 및 계속하기
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
