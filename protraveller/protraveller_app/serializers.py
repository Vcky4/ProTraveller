from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import login, logout, authenticate
from rest_framework import serializers
from .models import *

# Serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

# API view for user signup
class SignupView(APIView):
    def post(self, request):
        """
        Handles user registration.

        POST: Validates user input, creates a new user, and logs them in.
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(
                email=serializer.validated_data['email'],
                username=serializer.validated_data['username'],
                password=request.data['password']
            )
            user.phone_number = serializer.validated_data.get('phone_number', None)
            user.save()
            login(request, user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# API view for user login
class LoginView(APIView):
    def post(self, request):
        """
        Handles user login.

        POST: Authenticates the user and logs them in.
        """
        username = request.data.get('username', '')
        password = request.data.get('password', '')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# API view for user logout
class LogoutView(APIView):
    def post(self, request):
        """
        Logs the user out.
        """
        logout(request)
        return Response(status=status.HTTP_200_OK)

# Serializer for the Profile model
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'profile_picture', 'bio')

# Serializer for editing the Profile model
class EditProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('profile_picture', 'bio')

# Serializer for the Article model
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
