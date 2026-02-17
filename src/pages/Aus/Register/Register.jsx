import { Alert, Button, Input, Radio, RadioGroup } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import VaildaitionMessage from "../../../componets/Shared/VaildaitionMessage";
import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { registerSchema } from "../../../schema/register.schema";
import AppButton from "../../../componets/Shared/AppButton/AppButton";

const API_URL = "https://route-posts.routemisr.com/users/signup";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields, isValid, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
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
        setSuccessMessage("succeefully Register");

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
        <h1 className="text-center font-bold text-4xl">Register</h1>

        {erorrMessage && <Alert color={"danger"} title={erorrMessage} />}
        {SuccessMessage && <Alert color={"success"} title={SuccessMessage} />}

        <form
          onSubmit={handleSubmit(onSumbitForm)}
          className="p-12 bg-white shadow-lg rounded flex flex-col gap-4"
        >
          <Input
            label="name"
            type="text"
            variant="bordered"
            {...register("name")}
          />

          <VaildaitionMessage
            field={errors.name}
            isTouched={touchedFields.name}
          />

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

          <Input
            label="confirm password"
            type="password"
            variant="bordered"
            {...register("rePassword")}
          />

          <VaildaitionMessage
            field={errors.rePassword}
            isTouched={touchedFields.rePassword || true}
          />

          <Input
            label="Date of Birth"
            type="Date"
            variant="bordered"
            {...register("dateOfBirth")}
          />

          <VaildaitionMessage
            field={errors.dateOfBirth}
            isTouched={touchedFields.dateOfBirth}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <RadioGroup label="Gender" {...field}>
                <Radio value="male">male</Radio>
                <Radio value="female">female</Radio>
              </RadioGroup>
            )}
          />

          <VaildaitionMessage
            field={errors.gender}
            isTouched={touchedFields.gender || true}
          />

          <AppButton
            type="submit"
            color="primary"
            isDisabled={!isValid}
            isLoading={isSubmitting}
          >
            Register
          </AppButton>
          <Link className="text-blue-700" to={"/login"}>
            Aleardy Have Account?
          </Link>
        </form>
      </div>
    </section>
  );
}
