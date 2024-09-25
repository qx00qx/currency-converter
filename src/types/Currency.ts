export type Currencies = {
  [key: string]: string
};

export type Currency = {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}