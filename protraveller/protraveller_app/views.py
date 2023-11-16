from django.shortcuts import render, get_object_or_404
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .models import User, Profile, Article
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .forms import *
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer, EditProfileSerializer, ArticleSerializer, UserSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

# View to display the index page with a list of articles
def index(request):
    articles = Article.objects.all().order_by('-publication_date')
    return render(request, 'protraveller_app/index.html', {'articles': articles})

# API view for user signup
@api_view(['GET', 'POST'])
@csrf_exempt
def signup_view(request):
    """
    Handles user registration.

    GET: Displays the registration form.
    POST: Validates user input, creates a new user, and logs them in.
    """
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            login(request, user)
            return Response({'message': 'Signup successful'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        form = CustomUserForm()
        return render(request, 'protraveller_app/signup.html', {'form': form})

    return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)

# API view for user login
@api_view(['POST'])
@csrf_exempt
def login_view(request):
    """
    Handles user login.

    POST: Authenticates the user and logs them in.
    """
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'})
        else:
            return Response({'message': 'Invalid credentials'}, status=401)

    return Response({'message': 'Invalid request'}, status=400)

# View for user logout
@csrf_exempt
def logout_view(request):
    """
    Logs the user out.
    """
    logout(request)
    return HttpResponseRedirect(reverse("index"))

# API view for user profile
@login_required
@api_view(['GET'])
def profile(request):
    """
    Displays the user's profile.

    GET: Returns the user's profile information.
    """
    profile = Profile.objects.filter(user=request.user).first()
    articles = Article.objects.filter(author=request.user).order_by('-publication_date')

    if profile:
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    else:
        return Response({'message': 'Profile not found'}, status=404)

# API view for editing user profile
@login_required
@api_view(['POST'])
def edit_profile(request):
    """
    Edits the user's profile.

    POST: Validates user input and updates the profile.
    """
    if request.method == 'POST':
        profile = Profile.objects.filter(user=request.user).first()
        serializer = EditProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Handle HTML rendering for editing the profile
    else:
        form = ProfileForm()

    return render(request, 'protraveller_app/profile_edit.html', {'form': form})

# API view for listing articles
@login_required
@api_view(['GET', 'POST'])
def article_list(request):
    """
    Displays a list of articles.

    GET: Returns a list of all articles.
    POST: Creates a new article and associates it with the logged-in user.
    """
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        form = ArticleForm(request.POST, request.FILES)
        if form.is_valid():
            article = form.save(commit=False)
            article.author = request.user
            article.save()
            return redirect('index')
        else:
            serializer = ArticleSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(author=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    form = ArticleForm()
    return render(request, 'protraveller_app/index.html', {'form': form})
