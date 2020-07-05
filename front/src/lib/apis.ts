import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Address } from '../types';

const API_HOST = 'http://localhost:30001';
const TIME_OUT = 5000;
const api = axios.create({
  timeout: TIME_OUT,
  baseURL: API_HOST,
});

export const getAddress = async (): Promise<
  AxiosResponse<{
    message: string;
    data: { addresses: Address[]; default: number };
  }>
> => await api.get('address/list');

export const removeAddress = async (
  addressId: number,
): Promise<
  AxiosResponse<{
    message: string;
    data: { address: Address };
  }>
> => await api.delete('address/remove', { data: { id: addressId } });
