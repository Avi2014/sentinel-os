export interface AuthUserDto {
  id: string;
  organizationId: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

export interface AuthTokensDto {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponseDto {
  success: boolean;
  message: string;
  data: {
    user: AuthUserDto;
    tokens: AuthTokensDto;
  };
}

export function toAuthResponse(
  user: {
    id: string;
    organizationId: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
  },
  accessToken: string,
  refreshToken: string,
  message: string,
): AuthResponseDto {
  return {
    success: true,
    message,
    data: {
      user: {
        id: user.id,
        organizationId: user.organizationId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isActive: user.isActive,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    },
  };
}