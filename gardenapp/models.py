from django.db import models

# Create your models here

class Zone(models.Model):
  name = models.CharField(max_length=400)
  zdescription = models.CharField(max_length=400)
  vintro = models.CharField(max_length=400)
  def __str__(self):
      return self.name
    
class Vegetable(models.Model):
  name = models.CharField(max_length=250)
  vdescription = models.CharField(max_length=400)
  sunlight = models.CharField(max_length=400)
  care = models.CharField(max_length=400)
  image = models.CharField(max_length=400)
  tips = models.CharField(max_length=400)
  zone = models.ForeignKey(Zone, on_delete=models.CASCADE, related_name='vegetables',  null=True)
  def __str__(self):
      return self.name
    