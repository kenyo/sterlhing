from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

import json

from api.models import Customer, Subscription, Gifts

def home(request):
    return HttpResponse('Hello, World!')


@csrf_exempt
# create or update customer from webhook
def crupdate_customer(request):
  if request.method == 'POST':


    payload = json.loads(request.body)
    customer = payload['customer']
    customer_id =  customer['id']

    person, created = Customer.objects.get_or_create(id=customer_id)

    if created:
      print('foo')
      # means you have created a new person
    else:
      print('bar')
      # person just refers to the existing one

    # check if customer exists
    # try:
    #   existing_customer = Customer.objects.get(id=customer_id)
    #   if existing_customer:
    #     # update customer

    #   else:
    #     new_customer = Customer(**customer)
    #     new_customer.save()
    # # #     car = Car(name=car_name, top_speed=top_speed)
    # # #     try:
    # # #         car.save()
    #   response = json.dumps([{ 'Success': 'Car added successfully!'}])
    # except:
    #   response = json.dumps([{ 'Failure': 'Problems'}])




    # #     except:
    # #         response = json.dumps([{ 'Error': 'Car could not be added!'}])
  return HttpResponse(response, content_type='text/json')
