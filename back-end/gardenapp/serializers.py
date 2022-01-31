from rest_framework import serializers
from .models import Zone, Vegetable
from django.contrib.auth.models import User

class VegetableSerializer(serializers.ModelSerializer):  

  class Meta:
    model = Vegetable
    fields = ['id', 'name', 'description', 'sunlight', 'care', 'image', 'tips', 'zone']
    
class ZoneSerializer(serializers.ModelSerializer):
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
    
  def update(self, instance, validated_data):
    vegetables_data = validated_data.pop('vegetables')
    vegetables = (instance.vegetables).all()
    vegetables = list(vegetables)
    instance.name = validated_data.get('name', instance.name)
    instance.description = validated_data.get('description', instance.description)
    instance.intro = validated_data.get('intro', instance.intro)
    instance.save()
    
    for vegetable_data in vegetables_data:
      vegetable = vegetables.pop(0)
      vegetable.name = vegetable_data.get('name', vegetable.name)
      vegetable.description = vegetable_data.get('description', vegetable.description)
      vegetable.intro = vegetable_data.get('intro', vegetable.intro)
      vegetable.save()
    return instance
    
    
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'password', 'email')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)