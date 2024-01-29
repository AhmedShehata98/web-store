type ItemsType = {
  iconUrl: string | StaticImageData;
  title: string;
  category: {
    id: string;
    categoryName: string;
  };
  rating: number;
  ratingCount: number;
};

type SignupFormType = {
  fullName: string;
  email: string;
  password: string;
  jobTitle: string;
};

type UserType = {
  fullName: string;
  email: string;
  profileImageUrl: string | null;
  jobTitle: string;
  country: string;
  usedFramework: string;
  githubProfileUrl: string | null;
  linkedinProfileUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

interface IApplication {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: Array<{
    _id: string;
    url: string;
    width: number;
    height: number;
  }>;
  review: IReview;
  category: ICategory;
  developer: UserType;
  demoUrl: string;
  repoUrl: string;
  usedTechnologies: Array<string>;
  createdAt: string;
  updatedAt: string;
}

type CreateAppFormType = Omit<
  IApplication,
  '_id' | 'createdAt' | 'updatedAt' | 'review' | 'images' | 'category' | 'developer'
> & {
  category: string;
  images: Partial<UploadResponse>[];
};

type ApplicationsResponseType = {
  application: IApplication[];
  total: number;
  currentPage: number;
  limit: number;
};
interface ICategory {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

type CategoriesResponseType = ICategory[] & {};

type ImagesListType = {
  id: string;
  url: string;
  title: string;
  size: number;
  file: File;
};

type UploadResponse = {
  url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
};
