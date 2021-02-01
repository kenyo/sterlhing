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
    customer_id = customer['id']
    # customer['subscription'].update({'customer_id': customer_id})
    subscription = customer['subscription']
    # gifts = map(lambda x: x.update({'customer_id': customer_id}), customer['gifts'])
    gifts = customer['gifts']

    try:
      customer, created = Customer.objects.update_or_create(id=customer_id, defaults=customer)
      subscription, sub_created = Subscription.objects.update_or_create(id=subscription['id'], customer_id=customer, defaults=subscription)

      for gift in gifts:
        Gifts.objects.update_or_create(customer_id=customer, defaults=gift)

      if created:
        response = json.dumps([{ 'Success': 'Customer successfully created.'}])
      else:
        response = json.dumps([{ 'Success': 'Customer successfully updated.'}])
    except:
      response = json.dumps([{ 'Failure': 'Problem saving new customer.' }])

  return HttpResponse(response, content_type='text/json')
