export interface Navtype {
  title: string;
  path: string;
  component: string;
}

export interface NavTypeWrap {
  navData: Navtype[];
}