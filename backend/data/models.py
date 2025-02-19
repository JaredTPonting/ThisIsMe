from django.db import models

class DataProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tools_used = models.CharField(max_length=200, help_text="Comma-separated list of tools")
    github_link = models.URLField(max_length=300)
    image = models.ImageField(upload_to='data_projects/', blank=True, null=True)
    content = models.TextField()  # For detailed write-up in Markdown

    def __str__(self):
        return self.title
