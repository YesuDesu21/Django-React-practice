from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
#ORM maps python objects to the corresponding code to make a change to db

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["id","username","password"]
        extra_kwargs={"password":{"write_only": True}}#dont show password while typing

    #create new version of user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
         model = Note ;
         fields = ["id","title","content","created_at","author"]
         extra_kwargs={"author":{"read_only":True}}
