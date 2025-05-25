"use client";
import TopBar from "@/components/common/TopBar";
import LockIllustration from "@/assets/images/lock.svg";

import React, { useState } from "react";
import CustomInput from "@/components/common/CustomInput";

function SignIn() {
  const [value, setvalue] = useState("");
  return (
    <div className="max-w-md h-full mx-auto bg-white flex flex-col  gap-5 p-4 ">
      <TopBar name="Sign In" />
      <LockIllustration className="mx-auto my-16" />
      <form>
        <CustomInput
          type="email"
          label="Email"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
            console.log(e.target);
          }}
          name="email"
        />
      </form>
    </div>
  );
}

export default SignIn;
