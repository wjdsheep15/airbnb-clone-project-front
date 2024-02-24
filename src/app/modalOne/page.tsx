"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./styles.module.css";

// 모달 박스 CSS
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "20px",
  transform: "translate(-50%, -50%)",
  height: 830,
  width: 780,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 4,
};

// 모달 X 버튼 CSS
export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn)`
  background-color: #4000c7;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 셀렉트 박스 값과 CSS
const options = [
  { value: "한국 (+82)", label: "한국 (+82)" },
  { value: "미국 (+1)", label: "미국 (+1)" },
];

// 버튼 CSS
const btnStyle = {
  color: "white",
  background: "#D81B60",
  marginTop: "40px",
  border: "1px solid",
  borderRadius: "10px",
  fontSize: "24px",
  width: 700,
  height: 60,
  fontWeight: "bold",
};

const btnLoginStyle = {
  color: "black",
  marginTop: "-10px",
  border: "1px solid",
  borderRadius: "10px",
  fontSize: "20px",
  width: 700,
  height: 60,
  fontWeight: "bold",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal 닫기 함수
  const [close, setClose] = React.useState(false);

  const [selectedOption, setSelectedOption] = React.useState("한국 (+82)"); // 셀렉트 박스
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const closeModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setClose(!close);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {/* 제목 + X버튼 영역 */}
            <ExitBtn onClick={closeModalHandler}>x</ExitBtn>
            <Typography
              id="modal-modal-title"
              variant="h6"
              align="center"
              fontWeight={600}
              sx={{ borderBottom: "1px solid #bdbdbd" }}
            >
              로그인 또는 회원가입
            </Typography>
          </div>

          <hr />
          <Typography sx={{ mt: 2, fontSize: "24px", fontWeight: "bold" }}>
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
            type="number"
            id="phoneNumber"
            aria-required="true"
            fullWidth
          />
          <Typography id="modal-modal-process" sx={{ mt: 1 }}>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </Typography>
          <Button style={btnStyle}>계속</Button>

          <Typography className={styles.hrSect}>또는</Typography>
          <Button style={btnLoginStyle} className={styles.imageInButton}>
            카카오로 로그인하기
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
