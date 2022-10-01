import { PLANS_FREQUENCY, PLANS_TYPE } from './enums';

export type ReceivedPlansType = {
  planID: string;
  detail: string[];
  frequency: PLANS_FREQUENCY;
  price: number;
  name: string;
  type: PLANS_TYPE;
}

export type AxiosPlansType = {
  data: {
    data: ReceivedPlansType[]
  };
};
