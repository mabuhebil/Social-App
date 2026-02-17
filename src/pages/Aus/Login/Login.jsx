import { Alert, Button, Input, Radio, RadioGroup } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import VaildaitionMessage from "../../../componets/Shared/VaildaitionMessage";
import { data, Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { registerSchema } from "../../../schema/register.schema";
import { loginSchema } from "../../../schema/login.schema";
import AppButton from "../../../componets/Shared/AppButton/AppButton";
import { AuthContext } from "../../../componets/context/AuthContext";

const API_URL = "https://route-posts.routemisr.com/users/signin";

export default function Register() {
  const { saveUserToken } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields, isValid, isSubmitting },
    control,
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const Navigate = useNavigate();

  let timeoutId;

  const [erorrMessage, setErorrMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");

  async function onSumbitForm(data) {
    console.log("summent", data);

    try {
      const res = await axios.request({
        method: "POST",
        url: API_URL,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      console.log(res);
      if (res.error) {
        throw new Error(res.error);
      } else {
        setSuccessMessage("succeefully Logined");

        saveUserToken(res.data.data.token);

        timeoutId = setTimeout(() => {
          Navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error.response.data.error);

      setErorrMessage(error.response.data.error);
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-100  md:max-w-1/3 lg:max-w-1/2 mx-auto space-y-5">
        <h1 className="text-center font-bold text-4xl">Login</h1>

        {erorrMessage && <Alert color={"danger"} title={erorrMessage} />}
        {SuccessMessage && <Alert color={"success"} title={SuccessMessage} />}

        <form
          onSubmit={handleSubmit(onSumbitForm)}
          className="p-12 bg-white shadow-lg rounded flex flex-col gap-4"
        >
          <Input
            label="Email"
            type="text"
            variant="bordered"
            {...register("email")}
          />

          <VaildaitionMessage
            field={errors.email}
            isTouched={touchedFields.email}
          />

          <Input
            label="password"
            type="password"
            variant="bordered"
            {...register("password")}
          />

          <VaildaitionMessage
            field={errors.password}
            isTouched={touchedFields.password}
          />

          <AppButton isDisabled={!isValid} isLoading={isSubmitting}>
            Login
          </AppButton>

          <Link className="text-blue-700" to={"/register"}>
            Create anew Account!
          </Link>
        </form>
      </div>
    </section>
  );
}
