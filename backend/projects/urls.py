from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, TagViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'tags', TagViewSet, basename='tag')

urlpatterns = [
    path('', include(router.urls)),
]
