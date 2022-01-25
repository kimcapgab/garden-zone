from django.db import models

# Create your models here

class Zone(models.Model):
  name = models.CharField(max_length=400)
  description = models.CharField(max_length=800)
  intro = models.CharField(max_length=800)
  def __str__(self):
      return self.name
    
class Vegetable(models.Model):
  name = models.CharField(max_length=250)
  description = models.CharField(max_length=1000)
  sunlight = models.CharField(max_length=600)
  care = models.CharField(max_length=1000)
  image = models.CharField(max_length=400)
  tips = models.CharField(max_length=1000)
  zone = models.ForeignKey(Zone, on_delete=models.CASCADE, related_name='vegetables',  null=True)
  def __str__(self):
      return self.name
    