from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import ZoneSerializer, VegetableSerializer
from .models import Zone, Vegetable

# Create your views here.
class ZoneViewSet(viewsets.ModelViewSet):
  queryset = Zone.objects.all()
  serializer_class = ZoneSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
class VegetableViewSet(viewsets.ModelViewSet):
    queryset = Vegetable.objects.all()
    serializer_class = VegetableSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]