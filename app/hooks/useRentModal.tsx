import { create } from 'zustand'

interface loginRentStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useRentModal = create<loginRentStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRentModal