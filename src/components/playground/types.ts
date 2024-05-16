export type CityPitch = {
  _id: string;
  _v: number;
  city: string;
  pitch: string;
  createdAt: string;
};

export type NewPitch = {
  city: string;
  pitch: string;
  createdAt: string | null;
  isLoading: boolean;
};

export type ToastType = {
  type: "success" | "error" | undefined;
  text: string;
  isVisible: boolean;
};
