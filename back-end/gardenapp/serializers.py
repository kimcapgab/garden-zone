from rest_framework import serializers
from .models import Zone, Vegetable
from django.contrib.auth.models import User

class ZoneSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Zone
    fields = ['name', 'description', 'intro', 'vegetables']
    
class VegetableSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Vegetable
    fields = ['name', 'description', 'sunlight', 'care', 'image', 'tips', 'zone']
    
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'password', 'email')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)