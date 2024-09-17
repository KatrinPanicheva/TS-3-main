import { Point } from "./Point";

type Restaurant = {
    _id: string;
    companyId: number;
    name:  string;
    address:  string;
    postalCode: string; //ei voi alkaa numerolla sen takia stringi,merkkijono//
    city: string;
    phone: string;
    location: Point;
    company:string;
};

export {Restaurant};
