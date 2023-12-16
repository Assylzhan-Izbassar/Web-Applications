from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    data_of_creation = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title + " " + self.author
