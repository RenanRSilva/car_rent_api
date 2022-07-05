import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }

  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoryRepository };
