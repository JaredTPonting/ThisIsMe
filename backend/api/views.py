from django.shortcuts import render
from rest_framework import generics
from .serializers import ProjectSerializer
from .models import Project

class ProjectCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
            
class ProjectDelete(generics.DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
    
                