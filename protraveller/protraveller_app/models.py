from django.db import models
from django.core import validators
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

   

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pics/', default='default.jpg')
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.user.username
    
class Article(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, default='anonymous')
    post = models.TextField()
    images = models.ImageField(upload_to='article_images/')
    publication_date = models.DateTimeField(auto_now_add=True)
    cleanliness_rating = models.PositiveIntegerField(default=0)
    service_rating = models.PositiveIntegerField(default=0)
    affordability_rating = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return f"Article by {self.author.username}"
    
class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.article.user.username}'s article"
    
class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}'s Favorite Article"
