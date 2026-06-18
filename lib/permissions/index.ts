import { UserRole } from "@prisma/client";

export type Permission =
  | "posts:create"
  | "posts:edit"
  | "posts:delete"
  | "posts:approve"
  | "posts:publish"
  | "notices:create"
  | "notices:edit"
  | "notices:delete"
  | "notices:approve"
  | "events:create"
  | "events:edit"
  | "events:delete"
  | "events:approve"
  | "gallery:upload"
  | "gallery:delete"
  | "downloads:upload"
  | "downloads:delete"
  | "achievements:create"
  | "achievements:edit"
  | "sports:manage"
  | "sports:results"
  | "users:manage"
  | "settings:manage"
  | "analytics:view"
  | "ai:use";

const rolePermissions: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [
    "posts:create", "posts:edit", "posts:delete", "posts:approve", "posts:publish",
    "notices:create", "notices:edit", "notices:delete", "notices:approve",
    "events:create", "events:edit", "events:delete", "events:approve",
    "gallery:upload", "gallery:delete",
    "downloads:upload", "downloads:delete",
    "achievements:create", "achievements:edit",
    "sports:manage", "sports:results",
    "users:manage", "settings:manage", "analytics:view", "ai:use",
  ],
  PRINCIPAL: [
    "posts:create", "posts:edit", "posts:approve", "posts:publish",
    "notices:create", "notices:edit", "notices:approve",
    "events:create", "events:edit", "events:approve",
    "gallery:upload",
    "downloads:upload",
    "achievements:create", "achievements:edit",
    "analytics:view", "ai:use",
  ],
  TEACHER_ADMIN: [
    "posts:create", "posts:edit",
    "notices:create", "notices:edit",
    "events:create", "events:edit",
    "gallery:upload",
    "downloads:upload",
    "achievements:create",
    "ai:use",
  ],
  MEDIA_TEAM: [
    "posts:create", "posts:edit",
    "gallery:upload", "gallery:delete",
    "ai:use",
  ],
  SPORTS_ADMIN: [
    "sports:manage", "sports:results",
    "ai:use",
  ],
  STUDENT_EDITOR: [
    "posts:create",
  ],
  VIEWER: [],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}

export function canPublish(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "PRINCIPAL";
}

export function canApprove(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "PRINCIPAL";
}
