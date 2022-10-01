import { ReactElement, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AxiosPlansType, ReceivedPlansType } from "../../../ts/types";
import { PLANS_TYPE } from "../../../ts/enums";

const plansURL = process.env.REACT_APP_PLANS || "";

export default function Pricing() {
  // TODO: change it when working in the languages of the website
  const [plans, setPlans] = useState<ReceivedPlansType[]>([]);

  const getPlans = useCallback(async () => {
    const { data }: AxiosPlansType = await axios.get(plansURL);
    setPlans(data.data);
  }, []);

  useEffect(() => {
    getPlans();
  }, [getPlans]);

  const basic = (p: ReceivedPlansType): ReactElement => {
    return (
      <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
        <div className="flex-1 rounded-t-md rounded-b-none overflow-hidden shadow">
          <div className="p-4 text-3xl font-bold text-center border-b-2">
            {p.name}
          </div>
          <ul className="w-full text-center text-sm">
            {p.detail.map((d) => (
              <li key={d} className="border-b py-4">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b-md rounded-t-none overflow-hidden shadow p-6">
          <div className="w-full pt-6 text-3xl font-bold text-center">
            {`R$ ${p.price},00`}
            <span className="text-base ml-2">por evento</span>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://admin.touchsistemas.com.br/"
              className="mx-auto lg:mx-0 hover:underline bg-primary text-white font-bold rounded-full my-6 py-2 px-9 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    );
  };

  const advanced = (p: ReceivedPlansType): ReactElement => {
    return (
      <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <div className="w-full p-8 text-3xl font-bold text-center border-b-2">
            {p.name}
          </div>
          <ul className="w-full text-center text-base font-bold">
            {p.detail.map((d) => (
              <li key={d} className="border-b py-4">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="w-full pt-6 text-4xl font-bold text-center">
            {`R$ ${p.price},00`}
            <span className="text-base ml-2">* por evento</span>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://admin.touchsistemas.com.br/"
              className="mx-auto lg:mx-0 hover:underline bg-primary text-white font-bold rounded-full my-6 py-2 px-9 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    );
  };

  const subscription = (p: ReceivedPlansType): ReactElement => {
    return (
      <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
        <div className="flex-1 rounded-t-md rounded-b-none overflow-hidden shadow">
          <div className="p-4 text-3xl font-bold text-center border-b-2">
            {p.name}
          </div>
          <ul className="w-full text-center text-sm">
            {p.detail.map((d) => (
              <li key={d} className="border-b py-4">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b-md rounded-t-none overflow-hidden shadow p-6">
          <div className="w-full pt-6 text-3xl font-bold text-center">
            {`R$ ${p.price},00`}
            <span className="text-base ml-2">mensal</span>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://admin.touchsistemas.com.br/"
              className="mx-auto lg:mx-0 hover:underline bg-primary text-white font-bold rounded-full my-6 py-2 px-9 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-background">
      <div className="container mx-auto px-2 pt-4 pb-2 ">
        <h1 className="w-full text-5xl font-bold leading-tight text-center">
          Preços
        </h1>
        {!!plans.length && (
          <div className="flex flex-col sm:flex-row justify-center pt-6 my-12 sm:my-4">
            {basic(plans.find((x) => x.type === PLANS_TYPE.BASIC) as ReceivedPlansType)}
            {advanced(plans.find((x) => x.type === PLANS_TYPE.ADVANCED)as ReceivedPlansType)}
            {subscription(plans.find((x) => x.type === PLANS_TYPE.SUBSCRIPTION)as ReceivedPlansType)}
          </div>
        )}
      </div>
    </section>
  );
}
