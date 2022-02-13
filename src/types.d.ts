type PhraseType = {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

interface IRow {
  quoteId: string;
  userName: string;
  length: number;
  score?: number;
  uniqueCharacters: number;
  errors: number;
  duration: number;
}

interface IFinalResult {
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
}
