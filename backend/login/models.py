from django.db import models

# Create your models here.

class Member(models.Model):
  userName = models.CharField(max_length=255)
  password = models.CharField(max_length=255)