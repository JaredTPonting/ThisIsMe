from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    title = models.CharField(max_length=50)
    short_desc = models.CharField(max_length=250)
    link = models.CharField(max_length=500)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
