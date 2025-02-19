from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Project, Tag
from .serializers import ProjectSerializer, TagSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    http_method_names = ['get']  # Only allow GET requests
    permission_classes = [AllowAny]
