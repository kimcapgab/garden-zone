from rest_framework import serializers
from .models import Zone, Vegetable

class ZoneSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Zone
    fields = ['name', 'description', 'intro', 'vegetables']
    
class VegetableSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Vegetable
    fields = ['name', 'description', 'sunlight', 'care', 'image', 'tips', 'zone']