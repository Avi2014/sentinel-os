export class ApiResponse<T = unknown> {
  constructor(
    public readonly success: boolean,
    public readonly message: string,
    public readonly data?: T,
    public readonly meta?: Record<string, unknown>
  ) {}

  static success<T>(
    data?: T,
    message = "Request successful",
    meta?: Record<string, unknown>
  ) {
    return new ApiResponse(true, message, data, meta);
  }

  static error(
    message = "Request failed",
    meta?: Record<string, unknown>
  ) {
    return new ApiResponse(false, message, undefined, meta);
  }
}