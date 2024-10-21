from django.db import models

class Tag(models.Model):
    name = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    content = models.TextField()
    github_url = models.URLField(max_length=255, blank=True)
    live_demo_url = models.URLField(max_length=255, blank=True)
    image = models.ImageField(upload_to="projects/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag, related_name="projects")

    def __str__(self):
        return self.title
