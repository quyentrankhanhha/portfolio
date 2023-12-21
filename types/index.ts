type CommonType = {
  _id: string;
  name: string;
  _createdAt: string;
};

export interface EducationType extends CommonType {
  name: string;
  location: string;
  degree: string;
  year: string;
}
