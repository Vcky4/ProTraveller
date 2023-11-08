from django.shortcuts import render,get_object_or_404
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .models import User, Profile, Article
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .forms import *
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer, EditProfileSerializer, ArticleSerializer
from rest_framework import status

def index(request):
    articles = Article.objects.all().order_by('-publication_date')
    return render(request, 'protraveller_app/index.html', {'articles': articles})



def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'protraveller_app/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
    return render(request, 'protraveller_app/login.html')

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

@login_required
@api_view(['GET'])
def profile(request):
    profile = Profile.objects.filter(user=request.user).first()
    articles = Article.objects.filter(author=request.user).order_by('-publication_date')

    if profile:
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    else:
        return Response({'message': 'Profile not found'}, status=404)
    
@login_required
@api_view(['POST'])
def edit_profile(request):
    if request.method == 'POST':
        # Update the profile using the serializer
        profile = Profile.objects.filter(user=request.user).first()
        serializer = EditProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Handle HTML rendering for editing the profile
    else:
        form = ProfileForm()

    # Return an HTML response
    return render(request, 'protraveller_app/profile_edit.html', {'form': form})


@login_required
@api_view(['GET', 'POST'])
def article_list(request):
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