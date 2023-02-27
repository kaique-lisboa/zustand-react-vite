import create from 'zustand'
import { persist } from 'zustand/middleware'

interface IAddress {
  uf: string;
  address: string;
  complement?: string;
}

export interface IAddressStore {
  address: IAddress | null;
  setAddress: (address: IAddress) => void;
}

export const useAddressStore = create(
  persist<IAddressStore>((set) => ({
    address: null,
    setAddress: (address) => {
      set({ address })
    }
  }), {
    name: 'address-store'
  })
)
