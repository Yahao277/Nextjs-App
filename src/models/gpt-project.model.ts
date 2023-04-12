export type GptProject = {
  id: string;
  idx: number;
  name: string;
  stage: string;
  jobStatus: string;
  keywords?: string[];
  status?: string;
  progress?: { totalPosts: number; donePosts: number };
  includeImage?: boolean;
  includeVideo?: boolean;
  categories?: string[];
  posts?: any[];
};

export type GptPost = {
  id: string;
  idx: number;
  projectId: string;
  keyword: string;
  title?: string;
  category?: string[];
  outline?: string;
  generatedContent?: string;
  videoUrl?: string;
  imageUrl?: string;
  tokensConsumed?: number;
  priceConsumed?: number;
  done: boolean;
};
