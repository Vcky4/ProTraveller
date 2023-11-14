from . import views
from django.urls import path

urlpatterns = [
    path( '', views.index, name='index'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('profile/', views.profile, name='profile'),
    path('editprofile/', views.edit_profile, name='edit_profile'),
    path('articles/', views.article_list, name='article_list'),

    
    # REST-API Views
    path('api/signup/', views.signup_view, name='signup-api'),
    path('api/login/', views.login_view, name='login-api'),
    path('api/logout/', views.logout, name='logout-api'),
    path('api/profile/', views.profile, name='profile-api'),
    path('api/edit_profile/', views.edit_profile, name='edit-profile-api')

    
    
]
