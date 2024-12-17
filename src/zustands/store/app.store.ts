import {create} from 'zustand';

type AppStoreState = {
  loading: boolean;
  reload: boolean;
  setLoading: (loading: boolean) => void;
  resetState: () => void;
  reloadApi: () => void;
  unReadNotification: number;
  setUnReadNotification: (count: number) => void;
  fcmToken: string;
  setFcmtoken: (token: string) => void;
};

const initialState: AppStoreState = {
  loading: false,
  reload: false,
  setLoading: () => {},
  resetState: () => {},
  reloadApi: () => {},
  unReadNotification: 0,
  setUnReadNotification: () => {},
  fcmToken: '',
  setFcmtoken: () => {},
};

export const useAppStore = create<AppStoreState>((set, get) => ({
  loading: initialState.loading,
  reload: initialState.reload,
  setLoading: (loading: boolean) => set({loading}),
  resetState: () => set(initialState),
  reloadApi: () => set({reload: !get().reload}),
  unReadNotification: initialState.unReadNotification,
  setUnReadNotification: (count: number) => set({unReadNotification: count}),
  fcmToken: initialState.fcmToken,
  setFcmtoken: (token: string) => set({fcmToken: token}),
}));

export const appStore = useAppStore.getState();
