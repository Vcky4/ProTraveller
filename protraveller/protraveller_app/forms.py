from django import forms
from .models import Profile, Article

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['profile_picture', 'bio' ]

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['post', 'images', 'cleanliness_rating', 'service_rating', 'affordability_rating']
