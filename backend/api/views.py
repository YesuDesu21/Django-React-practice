from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny 

# Create your views here.
#generic view built from django for creating new object
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer #tells view what kind of data to accept to make a new user
    permission_classes = [AllowAny]

