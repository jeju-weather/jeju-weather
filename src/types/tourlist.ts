export interface TourlistInfoTypes {
  alltag: string;
  contentsid: string;
  contentscd: {
    value: string;
    label: string;
    refId: string;
  };
  title: string;
  region1cd: {
    value: string;
    label: string;
    refId: string;
  };
  region2cd: {
    value: string;
    label: string;
    refId: string;
  };
  address: string;
  roadaddress: string;
  tag: string;
  introduction: string;
  latitude: number;
  longitude: number;
  postcode: null;
  phoneno: string;
  repPhoto: {
    descseo: string;
    photoid: {
      photoid: number;
      imgpath: string;
      thumbnailpath: string;
    };
  };
}
