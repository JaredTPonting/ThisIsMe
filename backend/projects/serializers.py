from rest_framework import serializers, viewsets
from .models import Project, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]

class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer