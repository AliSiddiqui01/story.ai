import { create } from 'zustand';
import { UserProfile } from '@ai-storyteller/shared';

interface UserState {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
