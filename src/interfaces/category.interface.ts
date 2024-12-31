export interface ItemCategoryData {
  id: number;
  title: string;
  amount?: number;
  children?: ItemCategoryData[];
}
