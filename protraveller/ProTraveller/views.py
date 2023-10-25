from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.contrib.auth import login
from .models import CustomUser 
from django.shortcuts import render,redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import AuthenticationForm
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm

def index(request):

    return render(request, "ProTraveller/index.html")

def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return HttpResponseRedirect(reverse("ProTraveller:index"))
        else:
            return render(request, "ProTraveller/login.html", {
                "form": form,
                "message": "Invalid username and/or password."
            })
    else:
        form = AuthenticationForm()
        return render(request, "ProTraveller/login.html", {"form": form})

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("ProTraveller:index"))

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Log the user in after registration
            login(request, user)
            return redirect('ProTraveller:index')
    else:
        form = CustomUserCreationForm()
    return render(request, "ProTraveller/signup.html", {"form": form})
