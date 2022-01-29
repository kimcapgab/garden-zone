from rest_framework import serializers
from .models import Zone, Vegetable
from django.contrib.auth.models import User

class VegetableSerializer(serializers.HyperlinkedModelSerializer):  
  zone = serializers.StringRelatedField()
  class Meta:
    model = Vegetable
    fields = ['id', 'name', 'description', 'sunlight', 'care', 'image', 'tips', 'zone']


class ZoneSerializer(serializers.HyperlinkedModelSerializer):
  vegetables = VegetableSerializer(many = True)
  class Meta:
    model = Zone
    fields = ['id', 'name', 'description', 'intro', 'vegetables']
    
  def create(self, validated_data):
    vegetables_data = validated_data.pop('vegetables')
    zone = Zone.objects.create(**validated_data)
    for vegetable_data in vegetables_data:
      Vegetable.objects.create(zone=zone, **vegetable_data)
    return zone
    
    
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'password', 'email')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)