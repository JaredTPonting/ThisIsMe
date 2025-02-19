from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["id", "title", "short_desc", "link", "content", "created_at"]