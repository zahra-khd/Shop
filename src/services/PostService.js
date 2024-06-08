//ApiService
import ApiService from "./ApiService";

export class PostService {
  static posts(data) {
    return ApiService.post(`/posts`, { ...data });
  }
}
