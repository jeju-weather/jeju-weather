export interface HallasanInfoTypes {
  currentCount: number;
  data: InfoDataTypes[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export interface InfoDataTypes {
  구분: string;
  데이터기준일자: string;
  동절기: string;
  춘추절기: string;
  탐방로별: string;
  통제장소: string;
  하절기: string;
}
