import { PLANS, LANGUAGES } from "./enums";

export type PlansLangNameType = {
  language: LANGUAGES;
  name: string;
};

export type PlansLangDetailsType = {
  language: LANGUAGES;
  detail: string[];
};

export type PlansLangPriceType = {
  language: LANGUAGES;
  price: string;
};

export type receivedPlansType = {
  id: string;
  type: PLANS;
  name: PlansLangNameType[];
  details: PlansLangDetailsType[];
  price: PlansLangPriceType[];
};

export type AxiosPlansType = {
  data: receivedPlansType[];
};

export type FormatedPlanType = {
  id: string;
  type: PLANS;
  name: string | undefined;
  details: string[] | undefined;
  price: string | undefined;
};
