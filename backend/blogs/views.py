from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

class BlogPostListCreateView(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all().order_by("-published_date")
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]
    

class BlogPostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset  = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]
    