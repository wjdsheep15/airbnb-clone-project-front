"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./styles.module.css";
import SignUpButton from "./signUp";
import Image from "next/image";

// 셀렉트 박스 값과 CSS
const options = [
  { value: "한국 (+82)", label: "한국 (+82)" },
  { value: "미국 (+1)", label: "미국 (+1)" },
];

export default function BasicModal() {
  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(!open);
  };
  const handleOpen = () => setOpen(true);

  const [selectedOption, setSelectedOption] = React.useState("한국 (+82)"); // 셀렉트 박스
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const [value, setValue] = React.useState("");

  const handleNumber = (event: { target: { value: any } }) => {
    const inputValue = event.target.value;
    // 입력값이 숫자인지 확인
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={openModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border-2 border-black shadow-lg p-16 w-[745px] h-[820px]">
          <div>
            {/* 제목 + X버튼 영역 */}
            <div className="flex border-b-2">
              <Button
                className="border-none text-black -mt-5 -mb-0 -ml-10"
                onClick={openModalHandler}
              >
                <Image
                  src="/svgIcons/closeIcon.svg"
                  alt="My closeIcon SVG"
                  width={20}
                  height={20}
                  className="block h-4 w-4 overflow-visible -ml-10 -mt-9"
                />
              </Button>
              <Typography className="text-xl font-semibold -mt-10 ml-[180px]">
                로그인 또는 회원가입
              </Typography>
            </div>
          </div>
          <Typography className="mt-10 text-2xl font-semibold">
            에어비앤비에 오신 것을 환영합니다.
          </Typography>

          <br />

          <TextField
            select
            label="국가/지역"
            value={selectedOption}
            onChange={handleChange}
            fullWidth
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            aria-required="true"
            placeholder="전화번호"
            value={value}
            onChange={handleNumber}
            fullWidth
          />
          <Typography>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </Typography>
          <Typography className="underline text-black font-bold">
            개인정보 처리방침
          </Typography>

          <SignUpButton />

          <Typography className={styles.hrSect}>또는</Typography>
          <Button className="text-black -mt-5 border border-solid border-black rounded-lg text-2xl font-bold w-[620px] h-[60px]">
            <Image
              src="/images/kakaoLogin.png"
              alt="KakaoLogin"
              width={80}
              height={80}
              className="-ml-40 mr-20"
            />
            카카오로 로그인하기
          </Button>

          <Button className="text-black mt-5 border border-solid border-black rounded-lg text-2xl font-bold w-[620px] h-[60px]">
            이메일로 로그인하기
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
