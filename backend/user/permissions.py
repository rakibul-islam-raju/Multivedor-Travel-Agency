from rest_framework.permissions import BasePermission


class IsSystemAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "admin"


class IsVendor(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "vendor"
