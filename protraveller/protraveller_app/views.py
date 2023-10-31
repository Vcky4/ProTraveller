from django.shortcuts import render,get_object_or_404
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser, Profile
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .forms import *
from django.contrib.auth.decorators import login_required


def index(request):

    return render(request, "protraveller_app/index.html")



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
def profile(request, username):
    try:
        user = get_object_or_404(CustomUser, username=username)
        profile = get_object_or_404(Profile, user=user)
    except      CustomUser.DoesNotExist:
        pass
    except Profile.DoesNotExist:
        pass
    return render(request, 'profile.html', {'profile': profile})

def edit_profile(request, username):
    profile = Profile.objects.get(user__username=username)

    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            return redirect('display_profile', username=username)

    else:
        form = ProfileForm(instance=profile)

    return render(request, 'profile_edit.html', {'form': form})
