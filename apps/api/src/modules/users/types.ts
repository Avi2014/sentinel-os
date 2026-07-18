export interface UserListQuery {
  page: number;
  limit: number;
  search?: string;
}

export interface UpdateUserInput {
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
}