from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import BlogPostListCreateView, BlogPostDetailView

router = DefaultRouter()

urlpatterns = [
    path('posts/', BlogPostListCreateView.as_view(), name='blog-list-create'),
    path('posts/<int:pk>/', BlogPostDetailView.as_view(), name='blog-detail'),
]
