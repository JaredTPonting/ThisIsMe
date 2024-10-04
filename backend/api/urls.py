from django.urls import path
from . import views

urlpatterns = [
    path("projects/", views.ProjectCreate.as_view(), name="project-list"),
    path("projects/<int:pk>", views.ProjectCreate.as_view(), name="project-view"),
    path("projects/delete/<int:pk>", views.ProjectDelete.as_view(), name="delete-project")
]
