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
