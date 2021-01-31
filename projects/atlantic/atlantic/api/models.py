from django.db import models

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

class Subscription(models.Model):
  id = models.CharField(max_length=100, primary_key=True)
  customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
  plan_name = models.CharField(max_length=100)
  price = models.IntegerField()

class Gifts(models.Model):
  id = models.CharField(max_length=100, primary_key=True)
  customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
  plan_name = models.CharField(max_length=100)
  price = models.IntegerField()
  recipient_email = models.CharField(max_length=100)
