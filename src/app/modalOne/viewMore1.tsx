/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

// 다이얼로그 창 밑에서 위로 올라오도록 함.
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewMore1() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="ml-8 mt-4 font-bold underline decoration-2 text-black"
        onClick={handleClickOpen}
      >
        더보기
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl
        bg-white border-2 border-black shadow-lg p-16 w-[745px] h-[520px] mt-80"
      >
        <DialogContent>
          {/* 여기에 다이얼로그 내용을 넣어줍니다. */}
          <p className="text-[20px]">법적 약관</p>
          <p className="text-5xl">한국 사용자 대상 마케팅 이메일</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
