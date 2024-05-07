export interface fishTypes {
  key: string;
  name: string;
  icon: string;
  place: string[];
  weather: string | null;
  time: string[] | null;
  season: string[] | null;
  prices: {
    base: number;
    silver?: number;
    gold?: number;
    iridium?: number;
  };
}

export interface cropTypes {
  name: string;
  key: string;
  icon: string;
  prices: {
    base: number;
    silver?: number;
    gold?: number;
    iridium?: number;
  };
  season: string[];
  type: string;
  days: number;
  repeat: number | string | null;
  src: string;
}

export interface forageTypes {
  name: string;
  key: string;
  icon: string;
  prices: {
    base: number;
    silver?: number;
    gold?: number;
    iridium?: number;
  };
  season: string[] | null;
}

export interface scheduleTypes {
  additional: string | null;
  monday: { [key: string]: string };
  tuesday: { [key: string]: string };
  wendesdey: { [key: string]: string };
  thursday: { [key: string]: string };
  friday: { [key: string]: string };
  saturday: { [key: string]: string };
  sunday: { [key: string]: string };
}
export interface towniesTypes {
  key: string;
  name: string;
  bday: number;
  bseason: string;
  marry: boolean;
  gifts: {
    best: string[];
    good: string[];
    neutral: string[];
    bad: string[];
    worst: string[];
  };
  schedule: {
    spring: scheduleTypes;
    summer: scheduleTypes;
    autumn: scheduleTypes;
    winter: scheduleTypes;
  };
}
