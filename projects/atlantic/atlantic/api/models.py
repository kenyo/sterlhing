from django.db import models

# models.IntegerField()

# Create your models here.
class Customer(models.Model):
  id = models.CharField(max_length=100, primary_key=True)
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  address_1 = models.CharField(max_length=200)
  address_2 = models.CharField(max_length=200)
  city = models.CharField(max_length=100)
  state = models.CharField(max_length=2)
  postal_code = models.CharField(max_length=9)

# class Subscription(models.Model):


# class Gifts(models.Model):
