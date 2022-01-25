from rest_framework import serializers
from .models import Zone, Vegetable

class ZoneSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Zone
    fields = ['name', 'zdescription', 'vintro']
    
class VegetableSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Vegetable
    fields = ['name', 'vdescription', 'sunlight', 'care', 'image', 'tips', 'zone']