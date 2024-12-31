import {ItemCategoryData} from 'interfaces/category.interface';

export const generateCategory = (id: number): ItemCategoryData => ({
  id,
  title: `Category ${id}`,
  amount: 10,
  children: [],
});

export const mockListCategories: ItemCategoryData[] = Array.from(
  {length: 10},
  (_, index) => generateCategory(index),
);
