//ApiService
import ApiService from "./ApiService";

export class CommentService {
  static comments() {
    return ApiService.get(`/comments`);
  }
}
